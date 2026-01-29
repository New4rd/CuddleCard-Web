import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-field-component',
  imports: [],
  templateUrl: './input-field-component.html',
  styleUrl: './input-field-component.css',
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.value = element.value;
    this.valueChange.emit(this.value);
  }
}
