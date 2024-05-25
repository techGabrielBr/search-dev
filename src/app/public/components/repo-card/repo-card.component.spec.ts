import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RepoCardComponent } from './repo-card.component';
import { IconTextComponent } from "../../../shared/components/icon-text/icon-text.component";
import { mockRepositories } from '../../../../assets/mock/mockRepositories.mock';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IconTextComponent,
        RepoCardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    component.repo = mockRepositories[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property repo', () => {
    expect(component.repo).toEqual(mockRepositories[0]);
  });

  it('should calculate the correct date difference', () => {
    const testDate = component.repo.updated_at;
    const differenceInDays = component.dateDifference(testDate);
    const expectedDifference = Math.floor((new Date().getTime() - new Date(testDate).getTime()) / (24 * 60 * 60 * 1000));
    expect(differenceInDays).toBe(expectedDifference);
  });
});
