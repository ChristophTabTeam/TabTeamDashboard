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
  title: string = 'Rechnungen'

  @ViewChild('outputRef') outputRef: OutputPdfComponent

  lines: InvoiceLine[]
  line: any

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit() {
    this.invoiceService.getLines(this.line).subscribe((response) => {
      this.lines = response['invoices']
    })
  }
}
