import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { ModelModule } from '../model/model.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   authState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private apiservice: ApiService) {
    const user = new ModelModule;
    console.log();
    
    if (user.isLoggedIn() && user.getData()) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
      localStorage.clear();
    }
  }

  get isLoggedIn() {
    return this.authState.asObservable();
  }

  get tokenHeader() {
    return new ModelModule().getToken();
  }

  // user:any;
  // canActivate(
  //   next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //    this.user = new ModelModule();
  //    console.log("userrr",this.user);
     
  //   if (this.user.isLoggedIn() && (this.user.getData())) {
  //     return true;
  //   } else {
  //     this.authservice.authState.next(false)
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }

}
