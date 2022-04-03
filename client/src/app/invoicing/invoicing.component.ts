import { customers, Customer } from './../modules/customers';
import { employees } from './../modules/employees';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Article, articles } from '../modules/articles'
import { Service, services } from '../modules/services';
import { OutputPdfComponent } from './output-pdf/output-pdf.component';
import { InvoiceLine } from '../modules/invoiceLine';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  @ViewChild('outputRef') outputRef: OutputPdfComponent

  articles = articles
  serivces = services
  customers = customers
  employees = employees


  customer?: Customer
  selectedCustomer: number

  artOrServ: string
  lines: InvoiceLine[] = []
  sumOfLinePrice: number
  article?: Article
  service?: Service
  selectedArt: number
  selectedServ: number
  note: string
  amount: number
  employee: string
  nettoSum: number = 0

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.invoiceService.getLines().subscribe((lines) => (this.lines = lines))
    this.lines.forEach((l) => {
      this.sumOfLinePrice = this.sumOfLinePrice + l.servicePrice
    })
  }

  onArtSubmit() {
    this.outputRef.onArtSubmit()
  }

  test() {
    console.log(this.sumOfLinePrice)
  }

  onServSubmit() {
    this.outputRef.onServSubmit()
  }

  addLine(line: InvoiceLine) {
    this.invoiceService.addLine(line).subscribe((line) => (this.lines.push(line)))
    this.lines.forEach((line) => {
      line.linePrice
    })
  }

  deleteLine(line: InvoiceLine) {
    this.invoiceService.deleteLine(line).subscribe(() => (this.lines = this.lines.filter(l => l.id !== line.id)))
  }

  selectCustomer() {
    this.outputRef.selectCustomer()
  }

  onCustChange() {
    this.customer = customers.find(customer => customer.id == this.selectedCustomer)
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
