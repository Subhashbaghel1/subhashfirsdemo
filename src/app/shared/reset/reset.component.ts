import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  resetForm: FormGroup|any;

  constructor() {}

  ngOnInit() {
    this.resetForm = new FormGroup({
      'Email': new FormControl('', [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'Otp' : new FormControl ('', Validators.required),
      'newPassword': new FormControl('', Validators.required)
    })
  }

  onReset() {

  }

}
