import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputFieldComponent} from '../input-field-component/input-field-component';

@Component({
  selector: 'app-edit-component',
  imports: [
    InputFieldComponent
  ],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.scss',
})
export class EditComponent {
  @Input() from: string = '';
  @Input() to: string = '';

  @Output() saveRequested: EventEmitter<{ from: string, to: string }> = new EventEmitter();
  @Output() cancelRequested: EventEmitter<void> = new EventEmitter();

  onSaveClick(from: string, to: string): void {
    this.saveRequested.emit({from, to});
  }

  onCancelClick() {
    this.cancelRequested.emit();
  }
}
