import { Injectable } from '@angular/core';
import { Article, articles } from '../modules/articles';
import { Service, services } from '../modules/services';
import { InvoiceLine } from '../modules/invoiceLine';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  private getUrl = 'http://localhost:4201/getInvoice'
  private postUrl = 'http://localhost:4201/postInvoice'
  private deleteUrl = 'http://localhost:4201/deleteInvoice'

  linePrice: number
  nettoSum: number = 0

  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Article[] {
    return articles
  }

  getServices(): Service[] {
    return services
  }

  getLines(lines: InvoiceLine):Observable<any> {
    return this.http.get(this.getUrl)
  }

  addLine(line: InvoiceLine) {
    this.http.post<InvoiceLine>(this.postUrl, line, httpOptions)
  }

  deleteLine(line: InvoiceLine): Observable<InvoiceLine> {
    const url = `${this.deleteUrl}/${line.id}`
    return this.http.delete<InvoiceLine>(url)
  }
}
