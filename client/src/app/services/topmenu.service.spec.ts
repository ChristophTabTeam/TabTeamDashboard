import { TestBed } from '@angular/core/testing';

import { TopmenuService } from './topmenu.service';

describe('TopmenuService', () => {
  let service: TopmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
