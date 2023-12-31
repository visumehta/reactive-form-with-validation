import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './interfaces/user';
import { passwordMatch } from './validators/passwordMatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  intRegex = /^\d+$/;
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  myForm: FormGroup= new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(13)]),
        lname: new FormControl('', [Validators.required, Validators.minLength(13)]),
        age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60), Validators.pattern(this.intRegex)]),
        mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.intRegex)]),
        email: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
        confirm_password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)])
  }, [passwordMatch('password', 'confirm_password')])

  getControls(name: string) : AbstractControl | null {
    return this.myForm.get(name);
  }

  submitForm(formValue: User) {
    console.log(formValue);
  }
}
