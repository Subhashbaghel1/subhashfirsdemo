import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelModule { 
  // name?: string;
  // user_name?: string;
  // token?: string;
  // parent_id?: number;
  // is_change_password?: string;
  // data?: any;
  // errors?: string;
  // message?: string;
  // status?: boolean;


  setData(data:any) {
    localStorage.setItem('demoData', JSON.stringify(data))
  }

  getData() {
  let data:any = localStorage.getItem('demoData')
    return JSON.parse(data)
  }

  setToken(token:string) {
    localStorage.setItem('demotoken',token)
  }

  getToken() {
    localStorage.getItem('demotoken')
  }

  isLoggedIn() {
    return this.getToken() !==null;
  }

}
