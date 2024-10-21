import { TestBed } from '@angular/core/testing';

import { JoancemaService } from './joancema.service';

describe('JoancemaService', () => {
  let service: JoancemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoancemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
