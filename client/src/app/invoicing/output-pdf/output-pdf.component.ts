import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, articles } from 'src/app/modules/articles';
import { Service, services } from 'src/app/modules/services';
import { Customer, customers } from 'src/app/modules/customers';
import { InvoiceLine } from 'src/app/modules/invoiceLine';

@Component({
  selector: 'app-output-pdf',
  templateUrl: './output-pdf.component.html',
  styleUrls: ['./output-pdf.component.scss']
})
export class OutputPdfComponent implements OnInit {
  @Output() onAddArticle: EventEmitter<InvoiceLine> = new EventEmitter()
  @Output() onAddService: EventEmitter<InvoiceLine> = new EventEmitter()

  articles = articles
  services = services
  customers = customers

  pos: number = 0
  artNumber: number
  serviceName: string
  @Input() employee: string
  servicePrice: number
  @Input() amount: number
  totalLinePrice: number

  currentDate: string
  dueDate: string

  customer?: Customer
  article?: Article
  service?: Service

  @Input() selectedCust: number = 800001
  @Input() selectedArt: number = 10001
  @Input() selectedServ: number = 20002

  constructor() { }

  ngOnInit(): void {
    this.setDate()
    this.setDueDate()
  }

  setDate() {
    const date = new Date()
    this.currentDate = date.toLocaleDateString('de-DE')
  }

  setDueDate() {
    const date = new Date()
    const dueDate = date.setDate(date.getDate() + 14)
    const formatDueDate = new Date(dueDate)
    this.dueDate = formatDueDate.toLocaleDateString('de-DE')
  }

  test() {
    console.log(this.service)
  }

  onServSubmit() {
    if(!this.selectedServ) {
      alert('Bitte eine Dienstleistung oder einen Artikel auswählen')
    }

    this.pos = this.pos + 1
    if (this.service) {
      const newLine = {
        position: this.pos,
        number: this.service.id,
        serviceName: this.service.name,
        employee: this.employee,
        servicePrice: this.service.price,
        amount: this.amount
      }

      this.onAddService.emit(newLine)
    }
  }

  onArtSubmit() {
    if(!this.selectedArt) {
      alert('Bitte eine Dienstleistung oder einen Artikel auswählen')
    }

    this.pos = this.pos + 1

    if (this.article) {
      const newLine = {
        number: this.article.id,
        position: this.pos,
        serviceName: this.article.name,
        servicePrice: this.article.price,
        amount: this.amount
      }
      this.onAddArticle.emit(newLine)
    }
  }

  onCustChange() {
    this.customer = customers.find(customer => customer.id == this.selectedCust)
    console.log(this.customer)
  }

  onServChange() {
    this.service = services.find(service => service.id == this.selectedServ)
    console.log(this.service)
  }

  onArtChange() {
    this.article = articles.find(article => article.id == this.selectedArt)
    console.log(this.article)
  }
}
