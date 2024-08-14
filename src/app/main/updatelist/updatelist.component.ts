import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.scss']
})
export class UpdatelistComponent {
  updateForm: FormGroup | any;

  constructor( private router: ActivatedRoute, private fb:FormBuilder,
     private apiservice:ApiService, private route:Router, private toaster:ToastrService) {

  }
  data: any
  // empid:any

  ngOnInit() {

   let data = this.router.snapshot.params['empid']
   console.log("dataaa",data);
   

    this.updateForm = this.fb.group(
      {
        'empname': new FormControl('', Validators.required,),
        'Email': new FormControl('', [Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        'designation': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
      }
    )
 

    this.apiservice.employeeDataget(this.router.snapshot.params['empid'],data).subscribe((res) =>{
      console.log("ressssss",res);
      
      if(res){
        this.updateForm = this.fb.group(
          {
            'empname': new FormControl(res['empname']),
            'Email': new FormControl(res['Email']),
            'designation': new FormControl(res['designation']),
            'password': new FormControl(res['password']),
          }
        )
      }
    })
  }

  Update() {

    let data = {
      'designation': this.updateForm.controls['designation'].value,
      'empname': this.updateForm.controls['empname'].value,
      'Email': this.updateForm.controls['Email'].value,
      'password': this.updateForm.controls['password'].value,
     
      // 'id' : this.data
    }
      this.apiservice.employeesupdate(this.router.snapshot.params['empid'],data).subscribe((data:any) => {
        // console.log("resssss",data);
        if(data) {
          this.toaster.success(data?.message)
          this.route.navigate(['listdata'])
        }else{
          this.toaster.error(data?.error)
        }
        
      })
  }

  letterOnly(event:any) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

}
