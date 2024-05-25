import { UserService } from './../../../shared/services/user.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { UserCardComponent } from "../user-card/user-card.component";
import { Repository } from '../../models/Repository';
import { ToastrService } from 'ngx-toastr';
import { RepoCardComponent } from "../repo-card/repo-card.component";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      CommonModule,
      InputTextModule,
      IconFieldModule,
      InputIconModule,
      ButtonModule,
      UserCardComponent,
      RepoCardComponent
    ]
})
export class ProfileComponent {
  user!: User;
  repos: WritableSignal<Repository[]> = signal([]);
  loading = signal(false);

  destroyRef = inject(DestroyRef);

  constructor(private router: Router, private userService: UserService, private toastrService: ToastrService) {
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user']
  }

  ngOnInit(){
    this.getAllRepos();
  }

  getAllRepos(){
    this.loading.set(true);
    this.userService.getAllRepository(this.user.repos_url)
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (repos: Repository[]) => {
        this.repos.set(this.sortReposByStars(repos));
        this.loading.set(false);
      },
      error: (error) => {
        this.toastrService.error("Erro ao encontrar os repositórios", "Erro", {closeButton: true});
        this.loading.set(false);
      }
    })
  }

  sortReposByStars(repos: Repository[]): Repository[] {
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  openEmail(email: string): void {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
