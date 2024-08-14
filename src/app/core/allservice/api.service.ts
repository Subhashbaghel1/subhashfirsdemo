import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelModule } from '../model/model.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isSidenavOpen: boolean = false;

  constructor(private http: HttpClient) {
  }

  user = new ModelModule()
  //   httpOptions = {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer ' + this.authservice.tokenHeader(),
  //   })
  // };


  register(data: any): Observable<any> {
    return this.http.post('http://192.168.1.29:3000/register', data);
  }
  login(data: any): Observable<any> {
    return this.http.post('http://192.168.1.29:3000/login', data);
  }

  pagination(data: any): Observable<any> {
    return this.http.post('http://192.168.1.29:3000/employeesdata', data);
  }

  // employeedataFilter(designation: any): Observable<any> {
  //   return this.http.post('http://192.168.1.29:3000/designation', designation);
  // }

  logoutdata(data: any): Observable<any> {
    return this.http.post('http://192.168.1.29:3000/logout', data);
  }

  employeesData(data: any): Observable<any> {
    return this.http.post('http://192.168.1.29:3000/employees', data);
  }


  employeesDataDelete(id: Number): Observable<any> {
    return this.http.delete(`http://192.168.1.29:3000/employeesdata/${id}`)
  }

  employeesupdate(id:any,data:any): Observable<any> {
    return this.http.put(`http://192.168.1.29:3000/employees/${id}`,data)
  }

  changePassword(data:any): Observable<any> {
    return this.http.put('http://192.168.1.29:3000/changepassword',data)
  }
  employeeDataget(id:any,data:any): Observable<any> {
    return this.http.get(`http://192.168.1.29:3000/employees/${id}`,data)
  }

  // post(url: any, data: any): Observable<any> {
  //   return this.httpClient.post(this.apiUrl + url, data).pipe(map(res => {
  //     return res
  //   }), catchError(errorResponse => {
  //     return throwError(() => errorResponse)
  //   }));
  // }
  // get(url: any): Observable<any> {
  //   return this.httpClient.get(this.apiUrl + url).pipe(map(res => {
  //     return res
  //   }), catchError(errorResponse => {
  //     return throwError(() => errorResponse)
  //   }));
  // }

}



