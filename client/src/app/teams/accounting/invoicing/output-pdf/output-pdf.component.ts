import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article, articles } from 'src/app/modules/articles';
import { Service, services } from 'src/app/modules/services';
import { Customer, customers } from 'src/app/modules/customers';
import { InvoiceLine } from 'src/app/modules/invoiceLine';
import { InvoiceService } from 'src/app/services/invoice.service';

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
  id: number = 0
  artNumber: number
  serviceName: string
  @Input() note: string
  @Input() employee: string
  servicePrice: number
  @Input() amount: number
  totalLinePrice: number
  @Input() nettoSum: number

  currentDate: string
  dueDate: string

  customer?: Customer
  article?: Article
  service?: Service

  @Input() selectedCust: number
  @Input() articleArray?: Article
  @Input() serviceArray?: Service
  @Input() lines: any

  constructor(
    private invoiceService: InvoiceService,
  ) { }

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
    if(!this.serviceArray) {
      alert('Bitte eine Dienstleistung oder einen Artikel auswählen')
    }

    this.pos = this.pos + 1
    if (this.serviceArray) {
      const newLine = {
        id: this.pos,
        number: this.serviceArray.id,
        serviceName: this.serviceArray.name,
        serviceNote: this.note,
        employee: this.employee,
        servicePrice: this.serviceArray.price,
        amount: this.amount,
        linePrice: this.serviceArray.price * this.amount
      }
      this.onAddService.emit(newLine)
      this.invoiceService.addLine(newLine)
    }
  }

  onArtSubmit() {
    if(!this.articleArray) {
      alert('Bitte eine Dienstleistung oder einen Artikel auswählen')
    }

    this.pos = this.pos + 1

    if (this.articleArray) {
      const newLine = {
        id: this.pos,
        number: this.articleArray.id,
        serviceName: this.articleArray.name,
        serviceNote: this.note,
        servicePrice: this.articleArray.price,
        amount: this.amount,
        linePrice: this.articleArray.price * this.amount
      }
      this.onAddArticle.emit(newLine)
      this.invoiceService.addLine(newLine)
    }
  }

  selectCustomer(elem: number) {
    this.customer = this.customers.find(customer => customer.id == elem)
    console.log(this.customer)
  }
}
