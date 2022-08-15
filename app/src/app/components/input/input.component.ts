import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true })
  public inputRef?: ElementRef;

  @Input()
  public value = '';

  @Input()
  public type: 'text' | 'number' = 'text';

  @Input()
  public min: number | undefined;

  @Input()
  public placeholder = '';

  @Output()
  public changeEvent = new EventEmitter<string>();

  private inputSubscription?: Subscription;

  public ngOnInit(): void {
    this.inputSubscription = fromEvent<InputEvent>(this.inputRef?.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((event: InputEvent) => (event.target as HTMLInputElement).value),
        map((value: string) => this.changeEvent.emit(value)),
      )
      .subscribe()
  }

  public ngOnDestroy(): void {
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
  }
}
