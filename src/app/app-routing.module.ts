import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ForgotPasswordComponent } from "./pages/auth/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./pages/auth/change-password/change-password.component";
import { JobListingComponent } from "./pages/job-listing/job-listing.component";
import { TestComponent } from "./pages/test/test.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { JobViewComponent } from "./pages/job-view/job-view.component";
import { UrlService } from "./service/url.service";
import {
  LoginAuthGuardService,
  SeDashboardAuthGuardService
} from "./service/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: UrlService.LOGIN,
    component: LoginComponent,
    canActivate: [LoginAuthGuardService]
  },
  {
    path: UrlService.FORGOT_PASSWORD,
    component: ForgotPasswordComponent,
    canActivate: [LoginAuthGuardService]
  },
  {
    path: UrlService.CHANGE_PASSWORD,
    component: ChangePasswordComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.SE_DASHBOARD,
    component: JobListingComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: UrlService.VIEW_JOB,
    component: JobViewComponent,
    canActivate: [SeDashboardAuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
