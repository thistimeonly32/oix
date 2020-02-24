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
import { ChecklistFireAlarmSystemComponent } from "./pages/checklist-fire-alarm-system/checklist-fire-alarm-system.component";
import { SaveJobComponent } from "./pages/save-job/save-job.component";
import { VesdaSystemComponent } from "./pages/vesda-system/vesda-system.component";
import { HosFireExtSystemComponent } from "./pages/hos-fire-ext-system/hos-fire-ext-system.component";
import { SprinklerHosereelSystemIonComponent } from "./pages/sprinkler-hosereel-system-ion/sprinkler-hosereel-system-ion.component";
import { FiremanIntercomSystemComponent } from "./pages/fireman-intercom-system/fireman-intercom-system.component";

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
  },
  {
    path: UrlService.SAVE_JOB,
    component: SaveJobComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.CHECKLIST_FIRE_ALARM_SYSTEM,
    component: ChecklistFireAlarmSystemComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.CHECKLIST_VESDA_SYSTEM,
    component: VesdaSystemComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.CHECKLIST_HOSEREEL_SYSTEM_FIRE_EXTINGUISHER_SYSTEM,
    component: HosFireExtSystemComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.CHECKLIST_SPRINKLER_SYSTEM_HOSEREEL_SYSTEM_ION,
    component: SprinklerHosereelSystemIonComponent,
    canActivate: [SeDashboardAuthGuardService]
  },
  {
    path: UrlService.CHECKLIST_FIREMAN_INTERCOM_SYSTEM,
    component: FiremanIntercomSystemComponent,
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
