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
  private apiUrl = 'http://localhost:5000/invLines'

  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Article[] {
    return articles
  }

  getServices(): Service[] {
    return services
  }

  addLine(line: InvoiceLine): Observable<InvoiceLine> {
    return this.http.post<InvoiceLine>(this.apiUrl, line, httpOptions)
  }
}
