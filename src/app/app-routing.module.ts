import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './main/widget/widget.component';
import { HomeComponent } from './main/home/home.component';
import { HometwoComponent } from './main/hometwo/hometwo.component';
import { HomethreeComponent } from './main/homethree/homethree.component';
import { TopnavComponent } from './main/topnav/topnav.component';
import { TopnavsidebarComponent } from './main/topnavsidebar/topnavsidebar.component';
import { BoxedComponent } from './main/boxed/boxed.component';
import { FixedSidebarComponent } from './main/fixed-sidebar/fixed-sidebar.component';
import { FixedsidecustomComponent } from './main/fixedsidecustom/fixedsidecustom.component';
import { ChartjsComponent } from './main/chartjs/chartjs.component';
import { GeneralComponent } from './main/general/general.component';
import { ButtonsComponent } from './main/buttons/buttons.component';
import { GerenalelementComponent } from './main/gerenalelement/gerenalelement.component';
import { AdvanceComponent } from './main/advance/advance.component';
import { IconComponent } from './main/icon/icon.component';
import { DeshboardComponent } from './feature/deshboard/deshboard.component';
import { authGuard } from './core/auth/auth.guard';
import { ListdataComponent } from './main/listdata/listdata.component';
 import { LoginComponent } from './shared/login/login.component';
import { UpdatelistComponent } from './main/updatelist/updatelist.component';
import { registerLocaleData } from '@angular/common';
import { RegisterformComponent } from './shared/registerform/registerform.component';
import { ChangepasswordComponent } from './shared/changepassword/changepassword.component';
import { ForgetComponent } from './shared/forget/forget.component';
import { ResetComponent } from './shared/reset/reset.component';
// import { RegisterformComponent } from './main/registerform/registerform.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path:"register", component:RegisterformComponent},
  { path:"changePassword", component:ChangepasswordComponent},
  { path: "forgotPassword", component: ForgetComponent},
  { path: "reset", component:ResetComponent},
 
  {
    path: "", component: DeshboardComponent,canActivate:[authGuard], children: [
 
      { path: "updatelist/:empid", component:UpdatelistComponent},
      { path: "listdata",component: ListdataComponent},
      { path: "home", component: HomeComponent,  },
      { path: "hometwo", component: HometwoComponent },
      { path: "homethree", component: HomethreeComponent },
      { path: "topnav", component: TopnavComponent },
      { path: "topnavsidebar", component: TopnavsidebarComponent },
      { path: "boxed", component: BoxedComponent },
      { path: "widget", component: WidgetComponent },
      { path: "fixedsidebar", component: FixedSidebarComponent },
      { path: "fixedsidecustom", component: FixedsidecustomComponent },
      { path: "chartjs", component: ChartjsComponent },
      { path: "general", component: GeneralComponent },
      { path: "icon", component: IconComponent },
      { path: "buttons", component: ButtonsComponent },
      { path: "generalelement", component: GerenalelementComponent },
      { path: "advance", component: AdvanceComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
