import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../models/User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  value: string = "";
  loading = signal(false);

  constructor(private userService: UserService, private toastrService: ToastrService, private router: Router) {}

  search(){
    if(this.value.trim() === ''){
      this.toastrService.error("O campo de pesquisa não pode ser nulo", "Erro", {closeButton: true});
      return;
    }

    this.loading.set(true);
    this.userService.getUser(this.value).subscribe({
      next: (user: User) => {
        this.router.navigate(["/perfil"], {state: {user: user}});
      },
      error: () => {
        this.toastrService.error("Usuário não encontrado", "Erro", {closeButton: true})
      },
      complete: () => {
        this.loading.set(false);
      }
    })
  }
}
