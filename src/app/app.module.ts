import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './feature/sidenav/sidenav.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './feature/footer/footer.component';
import { WidgetComponent } from './main/widget/widget.component';
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
import { DeshboardComponent } from './feature/deshboard/deshboard.component';
import { IconComponent } from './main/icon/icon.component';
import { HeaderComponent } from './feature/header/header.component';
import { LoginComponent } from './shared/login/login.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { ListdataComponent } from './main/listdata/listdata.component';
import { UpdatelistComponent } from './main/updatelist/updatelist.component';
// import { RegisterformComponent } from './main/registerform/registerform.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { RegisterformComponent } from './shared/registerform/registerform.component';
import { ChangepasswordComponent } from './shared/changepassword/changepassword.component';
import { ForgetComponent } from './shared/forget/forget.component';
import { ResetComponent } from './shared/reset/reset.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    WidgetComponent,
    HometwoComponent,
    HomethreeComponent,
    TopnavComponent,
    TopnavsidebarComponent,
    BoxedComponent,
    FixedSidebarComponent,
    FixedsidecustomComponent,
    ChartjsComponent,
    GeneralComponent,
    IconComponent,
    ButtonsComponent,
    GerenalelementComponent,
    AdvanceComponent,
    DeshboardComponent,
    LoginComponent,
    ListdataComponent,
    UpdatelistComponent,
     RegisterformComponent,
     ChangepasswordComponent,
     ForgetComponent,
     ResetComponent,
    // SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
