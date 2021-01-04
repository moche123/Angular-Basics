import { TestBed } from '@angular/core/testing';

import { TraerapiService } from './traerapi.service';

describe('TraerapiService', () => {
  let service: TraerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
