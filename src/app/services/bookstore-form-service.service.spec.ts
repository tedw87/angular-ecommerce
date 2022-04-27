import { TestBed } from '@angular/core/testing';

import { BookstoreFormServiceService } from './bookstore-form-service.service';

describe('BookstoreFormServiceService', () => {
  let service: BookstoreFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
