import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from '../../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { mockUser } from '../../../../assets/mock/mockUser.mock';
import { HttpErrorResponse } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [FormsModule],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle search with valid value', () => {
    userService.getUser.and.returnValue(of(mockUser));
    component.value = 'teste';

    component.search();

    expect(userService.getUser).toHaveBeenCalledWith('teste');
    expect(router.navigate).toHaveBeenCalledWith(['/perfil'], { state: { user: mockUser } });
    expect(toastrService.error).not.toHaveBeenCalled();
  });

  it('should handle search with empty value', () => {
    component.value = '';
    component.search();

    expect(toastrService.error).toHaveBeenCalledWith('O campo de pesquisa não pode ser nulo', 'Erro', { closeButton: true });
    expect(userService.getUser).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should handle search with user not found', () => {
    userService.getUser.and.returnValue(throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Not Found', error: 'User not found' })));
    component.value = 'fake';

    component.search();

    expect(toastrService.error).toHaveBeenCalledWith('Usuário não encontrado', 'Erro', { closeButton: true });
    expect(userService.getUser).toHaveBeenCalledWith('fake');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should handle search with generic error', () => {
    userService.getUser.and.returnValue(throwError(() => new Error('')));
    component.value = 'test';

    component.search();

    expect(toastrService.error).toHaveBeenCalledWith('Erro ao encontrar usuário', 'Erro', { closeButton: true });
    expect(userService.getUser).toHaveBeenCalledWith('test');
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
