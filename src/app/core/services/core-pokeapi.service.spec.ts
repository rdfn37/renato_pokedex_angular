import { TestBed } from '@angular/core/testing';

import { CorePokeapiService } from './core-pokeapi.service';

describe('CorePokeapiService', () => {
  let service: CorePokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorePokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
