import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';
import { ModelModule } from 'src/app/core/model/model.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  data: any
  show: boolean = false
  passwords ='password'
  constructor(private router: Router, private fb: FormBuilder,
     private apiservice: ApiService, private toaster:ToastrService) {

  }
 
  
  ngOnInit() {
    // let user = new ModelModule
    this.loginForm = this.fb.group(
      {
        'Email': new FormControl('', [Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        'password': new FormControl('', Validators.required),

      }
    )
  }

  Login() {
    console.log(this.loginForm.value);
    let data = {
      'Email': this.loginForm.controls['Email'].value,
      'password': this.loginForm.controls['password'].value,
    }
    //  debugger;
    this.apiservice.login(data).subscribe((data) => {
      // console.log("ress",data);
      if(data.status =="true"){
      console.log("dfvd", data);
      const user =  new ModelModule();
      user.setData(data.data);
      user.setToken(data.token);
      this.toaster.success(data?.message)
      this.router.navigate(["home"])
      // this.loginForm.clear;
      } else {
        console.log("Login failed. Data received:", data);
        this.toaster.error(data?.message)
      }
    });
    
  }

  onRegister() {
    this.router.navigate(['register'])
  }

  onChangePassword() {
    this.router.navigate(["changePassword"])
  }

  onForget() {
    this.router.navigate(["forgotPassword"])
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
