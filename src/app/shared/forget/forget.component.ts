import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {
  forgetForm: FormGroup | any;

  constructor() {}

  ngOnInit() {
    this.forgetForm = new FormGroup({
      'Email': new FormControl("", [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    })
  }

  Forget() {

  }

  Reset () {

  }

}
