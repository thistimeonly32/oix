import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { ServiceDataService } from "src/app/service/service-data.service";
import { UtilService } from "src/app/service/util.service";
import { UrlService } from "src/app/service/url.service";

@Component({
  selector: "app-service-footer",
  templateUrl: "./service-footer.component.html",
  styleUrls: ["./service-footer.component.scss"]
})
export class ServiceFooterComponent implements OnInit {
  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService,
    private utilServ: UtilService
  ) {}

  ngOnInit() {}

  timeout(): void {
    this.router.navigateByUrl(`/${UrlService.SAVE_JOB}`);
  }
}
