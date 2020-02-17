import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ForgotPasswordComponent } from "./pages/auth/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./pages/auth/change-password/change-password.component";
import { JobListingComponent } from "./pages/job-listing/job-listing.component";
import { TestComponent } from "./pages/test/test.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { JobViewComponent } from "./pages/job-view/job-view.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  // {
  //   path: "login",
  //   loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  // },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent
  },
  {
    path: "se-dashboard",
    component: JobListingComponent
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
    path: "job-view",
    component: JobViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
