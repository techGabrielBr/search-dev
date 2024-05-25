import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { UserService } from './../../../shared/services/user.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { UserCardComponent } from "../user-card/user-card.component";
import { RepoCardComponent } from "../repo-card/repo-card.component";
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { Router, provideRouter } from '@angular/router';
import { mockUser } from '../../../../assets/mock/mockUser.mock';
import { mockRepositories } from '../../../../assets/mock/mockRepositories.mock';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getAllRepository']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        ButtonModule,
        UserCardComponent,
        RepoCardComponent
      ],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;

    component.user = mockUser;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllRepository and set repos on success', () => {
    userService.getAllRepository.and.returnValue(of(mockRepositories));
    component.ngOnInit();
    expect(component.loading()).toBeFalse();
    expect(component.repos()).toEqual(mockRepositories.sort((a, b) => b.stargazers_count - a.stargazers_count));
  });

  it('should handle error when getAllRepository fails', () => {
    userService.getAllRepository.and.returnValue(throwError(() => new Error('error')));
    component.ngOnInit();
    expect(toastrService.error).toHaveBeenCalledWith('Erro ao encontrar os repositórios', 'Erro', { closeButton: true });
    expect(component.loading()).toBeFalse();
  });

  it('should navigate back to /home', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
