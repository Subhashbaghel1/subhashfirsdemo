import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/allservice/api.service';
import { ModelModule } from 'src/app/core/model/model.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isBodyClassAdded: boolean =false

  constructor(private renderer: Renderer2, private el: ElementRef, private router:Router,
     private taster:ToastrService , private apiservice: ApiService) {}

  toggleHeaderClass() {
    this.isBodyClassAdded = !this.isBodyClassAdded;
    const body = this.el.nativeElement.ownerDocument.body;
    if (this.isBodyClassAdded) {
    this.renderer.addClass(body, 'sidebar-collapse');
    }else {
      document.body.classList.remove('sidebar-collapse');
    }
  }

  onLogout() {

    let data = {
      token: ""
    }

    this.apiservice.logoutdata(data).subscribe((res) =>{
      if(res) {
        this.taster.success(res?.message)
        this.router.navigate(['/login']);
        localStorage.removeItem('demotoken');
        localStorage.removeItem('demoData')
      }
    })
    // this.taster.success("logOut successfuly")
    // this.router.navigate(['/login']);
    // // localStorage.clear();
    // localStorage.removeItem('demotoken');
    // localStorage.removeItem('demoData');
  }
 


}
