import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { mockUser } from '../../../assets/mock/mockUser.mock';
import { mockRepositories } from '../../../assets/mock/mockRepositories.mock';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data by username', () => {
    const username = 'testuser';

    service.getUser(username).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockUser);
  });

  it('should fetch all repositories by URL', () => {
    const url = 'http://api.github.com/user/testuser/repositories';

    service.getAllRepository(url).subscribe(repos => {
      expect(repos).toEqual(mockRepositories);
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush(mockRepositories);
  });
});
