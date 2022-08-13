import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'EmptyPage',
  templateUrl: './empty-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyPageComponent {
  @Input() text = '';
}
