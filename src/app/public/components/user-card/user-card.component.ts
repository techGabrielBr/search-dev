import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/User';
import { IconTextComponent } from "../../../shared/components/icon-text/icon-text.component";

@Component({
    selector: 'app-user-card',
    standalone: true,
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      CommonModule,
      IconTextComponent
    ]
})
export class UserCardComponent {
  @Input({required: true}) user!: User;
}
