import { Article } from './modules/articles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleAndCustomerService {
  articles: Article[] = []

  constructor() { }

  selectArticle(article: Article) {
    this.articles.push(article)
  }

  getSelectedArticle() {
    return this.articles
  }
}
