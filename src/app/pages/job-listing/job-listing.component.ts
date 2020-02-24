import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { UrlService } from "src/app/service/url.service";
import { User } from "src/app/model/user";
import { JobsResponse } from "src/app/model/jobs-response";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-job-listing",
  templateUrl: "./job-listing.component.html",
  styleUrls: ["./job-listing.component.scss"]
})
export class JobListingComponent implements OnInit {
  loggedUser: User;
  jobs: JobsResponse;
  urlServ: UrlService = UrlService;

  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loggedUser = this.authServ.getUser();
    this.getJobs();
  }

  getJobs() {
    this.apiServ
      .getAllJobs(this.loggedUser.id)
      .then((jobs: JobsResponse) => {
        this.jobs = jobs;
      })
      .catch((error: any) => {})
      .then(() => {});
  }
}
