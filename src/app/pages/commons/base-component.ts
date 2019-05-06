import {FormControl, FormGroup} from '@angular/forms';
import {EventEmitter, Output} from '@angular/core';


export class BaseComponent {

  @Output() submit = new EventEmitter();


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
