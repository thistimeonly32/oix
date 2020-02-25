import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ForgotPasswordComponent } from "./pages/auth/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./pages/auth/change-password/change-password.component";
import { JobListingComponent } from "./pages/job-listing/job-listing.component";
import { TestComponent } from "./pages/test/test.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { JobViewComponent } from "./pages/job-view/job-view.component";
import { HeaderComponent } from "./pages/layout/header/header.component";
import { FooterComponent } from "./pages/layout/footer/footer.component";
import { SidenavComponent } from "./pages/layout/sidenav/sidenav.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./service/http-interceptor.service";
import { ChecklistFireAlarmSystemComponent } from './pages/checklist-fire-alarm-system/checklist-fire-alarm-system.component';
import { SaveJobComponent } from './pages/save-job/save-job.component';
import { ServiceHeaderComponent } from './pages/service-header/service-header.component';
import { VesdaSystemComponent } from './pages/vesda-system/vesda-system.component';
import { FiremanIntercomSystemComponent } from './pages/fireman-intercom-system/fireman-intercom-system.component';
import { HosFireExtSystemComponent } from './pages/hos-fire-ext-system/hos-fire-ext-system.component';
import { SprinklerHosereelSystemIonComponent } from './pages/sprinkler-hosereel-system-ion/sprinkler-hosereel-system-ion.component';
import { ServiceFooterComponent } from './pages/service-footer/service-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    JobListingComponent,
    TestComponent,
    DashboardComponent,
    JobViewComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SaveJobComponent,
    ServiceHeaderComponent,
    ChecklistFireAlarmSystemComponent,
    VesdaSystemComponent,
    FiremanIntercomSystemComponent,
    HosFireExtSystemComponent,
    SprinklerHosereelSystemIonComponent,
    ServiceFooterComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
