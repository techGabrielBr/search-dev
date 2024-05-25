import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Repository } from '../../models/Repository';
import { IconFieldModule } from 'primeng/iconfield';
import { IconTextComponent } from "../../../shared/components/icon-text/icon-text.component";

@Component({
    selector: 'app-repo-card',
    standalone: true,
    templateUrl: './repo-card.component.html',
    styleUrl: './repo-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      CommonModule,
      IconTextComponent
    ]
})
export class RepoCardComponent {
  @Input({required: true}) repo!: Repository;

  dateDifference(dateString: string): number {
    const inputDate = new Date(dateString);
    const currentDate = new Date();

    const differenceInMilliseconds = currentDate.getTime() - inputDate.getTime();

    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInOneDay);

    return differenceInDays;
  }
}
