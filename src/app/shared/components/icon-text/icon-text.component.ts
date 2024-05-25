import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [
    CommonModule,
    IconFieldModule,
  ],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTextComponent {
  @Input({required: true}) iconType!: string;
  @Input({required: true}) text!: string;
  @Input() noContentMsg!: string;
}
