import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {
  changeForm: FormGroup | any;
  show: boolean = false
  passwords ='password'

  constructor( private fb:FormBuilder, private apiservice:ApiService,
     private toaster: ToastrService, private router:Router) {

  }

  ngOnInit() {
    this.changeForm = this.fb.group(
      {
        'Email': new FormControl('',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        'currentPassword': new FormControl('', Validators.required),
        'newPassword': new FormControl('', Validators.required)

      }
    )
  }

  onChange() {
    let data = {
      'Email': this.changeForm.controls['Email'].value,
      'currentPassword': this.changeForm.controls['currentPassword'].value,
      'newPassword': this.changeForm.controls['newPassword'].value
    }

      this.apiservice.changePassword(data).subscribe((data:any) =>{

        if(data?.status == "true") {
          this.toaster.success(data?.message);
          this.router.navigate(["login"])
        } else {
          if( this.toaster.error(data.message)) {
          //  this.changeForm.controls['currentPassword'].value.clear();
          }
         
        }

      })
  }


  onLogin() {
    this.router.navigate(["login"])
  }
  onClick(){
    if (this.passwords === 'password') {
      this.passwords = 'text';
      this.show = true;
    } else {
      this.passwords = 'password';
      this.show = false;
    }
  }

}
