import { TestBed } from '@angular/core/testing';

import { ArticleAndCustomerService } from './article-and-customer.service';

describe('ArticleAndCustomerService', () => {
  let service: ArticleAndCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleAndCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
