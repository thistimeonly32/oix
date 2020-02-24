import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { JobsResponse } from "src/app/model/jobs-response";
import { JobByIdResponse } from "src/app/model/job-by-id-response";
import { UrlService } from "src/app/service/url.service";
import { ConstantService } from "src/app/service/constant.service";
import { ServiceDataService } from "src/app/service/service-data.service";

@Component({
  selector: "app-job-view",
  templateUrl: "./job-view.component.html",
  styleUrls: ["./job-view.component.scss"]
})
export class JobViewComponent implements OnInit {
  jobId: string;
  job: JobByIdResponse;
  urlServ: UrlService = UrlService;
  constant = ConstantService;

  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.jobId = params["jobId"];
      if (this.jobId) {
        this.getJob();
      }
    });
  }

  getJob() {
    this.apiServ
      .getJobById(this.jobId)
      .then((job: JobByIdResponse) => {
        this.job = job;
      })
      .catch((error: any) => {})
      .then(() => {});
  }

  timeIn() {
    this.servData.job = this.job;
    this.servData.service = ConstantService.DEFAULT_SERVICE_ID;
    this.servData.attendance = "1";
    this.servData.checkInTime = "1";
    this.router.navigateByUrl(
      `/${UrlService.CHECKLIST_HOSEREEL_SYSTEM_FIRE_EXTINGUISHER_SYSTEM}`
    );
  }
}
