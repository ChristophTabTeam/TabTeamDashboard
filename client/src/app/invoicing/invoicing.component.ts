import { customers, Customer } from './../modules/customers';
import { employees } from './../modules/employees';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Article, articles } from '../modules/articles'
import { Service, services } from '../modules/services';
import { OutputPdfComponent } from './output-pdf/output-pdf.component';
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
  selectedArt: number = 10001
  selectedServ: number = 20001
  note: string
  amount: number
  employee: string

  constructor(
    private formBuilder: FormBuilder,
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.invoiceService.getLines().subscribe((lines) => (this.lines = lines))
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

  deleteLine(line: InvoiceLine) {
    this.invoiceService.deleteLine(line).subscribe(() => (this.lines = this.lines.filter(l => l.id !== line.id)))
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
