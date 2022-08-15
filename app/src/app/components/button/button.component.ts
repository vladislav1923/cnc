import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public text = '';

  @Input()
  public isLoading: boolean | null = false;

  @Input()
  public loadingText = 'Loading...';

  @Output()
  public clickEvent = new EventEmitter();

  public onClick(e: Event): void {
    e.preventDefault();
    this.clickEvent.emit();
  }
}
