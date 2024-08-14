import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.scss']
})
export class ListdataComponent {
  startDate: any
  listForm: FormGroup | any
  emplyeeList: any = []
  data = []
  x: any;
  config: any
  datas: any
  page = 1;
  totalItems: any;
  itemPerPage = 10;
  index = 0
  i: any;
  currentPage: any;
  limit = 3

  constructor(private apiservice: ApiService, private router: Router, private toster: ToastrService) { }

  today: Date = new Date(); //StartDate for startDatetime
  dateOne: Date = new Date()



  ngOnInit() {
    this.listForm = new FormGroup({
      "searchTerm": new FormControl("", Validators.required),
      "dateOne": new FormControl("", Validators.required),
      "dateTwo": new FormControl("", Validators.required),
      "status": new FormControl("", Validators.required)
    })

    this.getEmployeeList("")
    // this.paginate()
  }


  ////////  sorted alphabetwise show list/////////////////////////
  // listData = [
  //   {id: 5170, sports_id: 1, series_id: 371, match_name: 'Southern Brave vs London Spirit', match_open_date: '2024-07-24T23:00'},
  //   {id: 5262, sports_id: 1, series_id: 376, match_name: 'Southern Brave Women vs London Spirit Women', match_open_date: '2024-07-24T19:30'},
  // ]
  // sortListData() {
  //   this.listData.sort((a, b) => {
  //     let nameA = a.match_name.toLowerCase(), nameB = b.match_name.toLowerCase();
  //     if (nameA < nameB) return -1;
  //     if (nameA > nameB) return 1;
  //     return 0;
  //   });

  //   console.log("listData",this.listData);
  // }



  
  getEmployeeList(value: any) {
    let data = this.listForm.value;

    this.apiservice.employeesData(data).subscribe(res => {
      console.log("resdsdssd", res);

      if (res) {
        this.emplyeeList = res
        // this.emloyedata = res
        console.log("emplyeeList", this.emplyeeList);
        this.config = {
          itemsPerPage: this.itemPerPage,
          currentPage: this.page,
          totalItems: this.totalItems
        };
        console.log("config", this.config);

      }
    })

  }

  onDelete(emplyee: any) {
    //  debugger
    if (!confirm("Are you sure you want to delete!")) {
      return;
    }

    this.data = this.emplyeeList
    this.data.findIndex((x: any) => x.empid == emplyee.empid)
    this.apiservice.employeesDataDelete(emplyee).subscribe((res) => {
      //  console.log("ress",res);
      if (emplyee != -1) {
        this.data.splice(emplyee, 1)
      }
      this.getEmployeeList("")
    })
  }

  onEdit(empid: any) {
    this.router.navigate(['updatelist', empid])
  }

  pageChange(page: any) {
    this.page = page
    this.getEmployeeList("")

  }

  onReset(listForm: any) {
    // console.log("sdsdsdfcsdfsf", listForm.value);
    this.listForm.reset();
    this.getEmployeeList("")
  }




  // paginate() {
  //    this.config = {
  //     itemsPerPage: this.itemPerPage,
  //     currentPage: this.page,
  //     totalItems: this.totalItems
  //   }
  //   this.apiservice.pagination(this.datas).subscribe((res) => {
  //     console.log("resss",res);

  //     if(res) {
  //       this.toster.success(res?.message)
  //     }
  //   })
  // }

  onChange(event: any) {

  }

}
