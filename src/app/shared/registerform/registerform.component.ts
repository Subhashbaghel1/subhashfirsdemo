
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';
// import { ApiService } from 'src/app/core/allservice/api.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent {
  registerForm: FormGroup | any;
  data:any

  constructor( private router:Router, private fb: FormBuilder,
     private apiservice:ApiService, private toaster:ToastrService) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        'empname': new FormControl('',[ Validators.required]),
        'Email': new FormControl('', [Validators.required, Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        'designation': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
        'salary': new FormControl('',Validators.required),
        'doj': new FormControl('', Validators.required),
      }
    )
  }

  Register() {
  //  let data = {
  //   // this.registerForm.value
  //   'Email': this.registerForm.controls['Email'].value,
  //   'password': this.registerForm.controls['password'].value,
  //   }
  let data = this.registerForm.value
    
    this.apiservice.register(data).subscribe((res) =>{
      // console.log("register",res);
      if(res.status == "true") {
        this.toaster.success(res?.message)
        this.router.navigate(['login'])
      }else{
        this.toaster.error(res?.message)
      }
      
    })
  }

  onLogin() {
    this.router.navigate(['login'])
  }

  letterOnly(event:any) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

}
