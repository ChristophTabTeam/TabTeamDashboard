import { customers, Customer } from './../modules/customers';
import { employees } from './../modules/employees';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Article, articles } from '../modules/articles'
import { Service, services } from '../modules/services';
import { OutputPdfComponent } from './output-pdf/output-pdf.component';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormBuilder, FormControl } from '@angular/forms';
import { InvoiceLine } from '../modules/invoiceLine';
import { Observable } from 'rxjs';
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
  lines: InvoiceLine[] = []

  customer?: Customer
  selectedCustomer: number = 800001

  artOrServ: string

  article?: Article
  service?: Service
  selectedArt: number
  selectedServ: number
  note: string
  amount: number
  employee: string

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {

  }

  onArtSubmit() {
    this.outputRef.onArtSubmit()
  }

  onServSubmit() {
    this.outputRef.onServSubmit()
  }

  addLine(line: InvoiceLine) {
    this.invoiceService.addLine(line).subscribe((line) => (this.lines.push(line)))
  }

  test() {
    console.log(this.artOrServ)
  }

  onArtChange(): void {
    this.outputRef.onArtChange()
  }

  onServChange(): void {
    this.outputRef.onServChange()
  }

  onCustChange() {
    this.outputRef.onCustChange()
  }
}
