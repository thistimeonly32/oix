import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authServ: AuthService) {}

  ngOnInit() {
    document.body.className =
      "sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
  }

  logout() {
    this.authServ.logout();
    this.router.navigateByUrl(UrlService.LOGIN);
  }
}
