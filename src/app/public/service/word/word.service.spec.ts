import { TestBed } from '@angular/core/testing';

import { Tag.ServiceService } from './tag.service.service';

describe('Tag.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tag.ServiceService = TestBed.get(Tag.ServiceService);
    expect(service).toBeTruthy();
  });
});
