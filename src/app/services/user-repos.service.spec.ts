import { TestBed } from '@angular/core/testing';

import { UserReposService } from './user-repos.service';

describe('UserReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserReposService = TestBed.get(UserReposService);
    expect(service).toBeTruthy();
  });
});
