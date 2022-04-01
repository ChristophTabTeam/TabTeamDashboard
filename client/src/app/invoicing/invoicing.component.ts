import { ArticleAndCustomerService } from './../article-and-customer.service';
import { customers, Customer } from './../modules/customers';
import { employees } from './../modules/employees';
import { Component, OnInit } from '@angular/core';
import { Article, articles } from '../modules/articles'

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {
  articles = articles
  customers = customers
  employees = employees

  selectedArt?: number
  article?: Article

  customer: Customer | undefined
  selectedCustomer: number

  constructor(
    private artAndCustService: ArticleAndCustomerService,
  ) { }

  ngOnInit(): void {

  }

  onArtChange(): void {
    this.article = articles.find(article => article.id === this.selectedArt)
    console.log(this.article)
  }

  onCustChange() {
    console.log(this.selectedCustomer)
  }
}
