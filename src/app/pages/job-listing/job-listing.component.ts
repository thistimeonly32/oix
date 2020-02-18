import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { UrlService } from "src/app/service/url.service";

@Component({
  selector: "app-job-listing",
  templateUrl: "./job-listing.component.html",
  styleUrls: ["./job-listing.component.scss"]
})
export class JobListingComponent implements OnInit {
  constructor(private router: Router, private authServ: AuthService) {}

  ngOnInit() {
    document.body.className =
      "hold-transition sidebar-mini layout-navbar-fixed layout-footer-fixed";
  }

  logout() {
    this.authServ.logout();
    this.router.navigateByUrl(UrlService.LOGIN);
  }
}
