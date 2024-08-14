import { CanActivateFn, Router } from '@angular/router';
import { ModelModule } from '../model/model.module'
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
   let router= inject(Router)
   let user = new ModelModule();
     console.log("userrrr",user.getData());
     
    if (user.isLoggedIn() && (user.getData())) {
      return true;
    } else {
      // authservice.authState.next(false)
      localStorage.clear()
      router.navigate(['/login']);
      return false;
    }
};
