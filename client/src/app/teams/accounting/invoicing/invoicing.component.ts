import { customers, Customer } from '../../../modules/customers';
import { employees } from '../../../modules/employees';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Article, articles } from '../../../modules/articles'
import { Service, services } from '../../../modules/services';
import { OutputPdfComponent } from './output-pdf/output-pdf.component';
import { InvoiceLine } from '../../../modules/invoiceLine';
import { InvoiceService } from '../../../services/invoice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  title: string = 'Rechnungen'
  customers = customers
  articles = articles
  services = services
  employees = employees

  @ViewChild('outputRef') outputRef: OutputPdfComponent

  customer = new FormControl('')
  artOrServ = new FormControl('serv')

  articleForm = new FormGroup({
    artNumb: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    note: new FormControl('')
  })

  serviceForm = new FormGroup({
    servNumb: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    employee: new FormControl(''),
    note: new FormControl('')
  })

  selectedCust: number
  choosenServ: any
  lines: InvoiceLine[]
  line: any
  customerAdded: boolean = false

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit() {
    this.invoiceService.getLines(this.line).subscribe((response) => {
      this.lines = response['invoices']
    })
  }

  onServChange() {
    if (this.serviceForm.value.servNumb) {
      this.choosenServ = this.services.find(serv => serv.name == this.serviceForm.value.servNumb)
    }
    console.log(this.choosenServ)
  }

  selectCust() {
    this.outputRef.selectCustomer(parseInt(this.customer.value))
    this.customerAdded = true
  }
}
