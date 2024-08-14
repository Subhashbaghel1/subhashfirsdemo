import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../allservice/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authservice:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("demotoken")
    // console.log("abccc",token);
    if(token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
      
    })
    
  }
    return next.handle(request);
  }
}
