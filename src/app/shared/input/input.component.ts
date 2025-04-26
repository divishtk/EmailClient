import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {


  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() inputType:string ='';
  @Input() controlType = 'input'


  showErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

}
