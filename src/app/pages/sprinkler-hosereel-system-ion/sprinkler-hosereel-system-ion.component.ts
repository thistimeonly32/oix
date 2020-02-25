import { Component, OnInit } from "@angular/core";
import { ConstantService } from "src/app/service/constant.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ServiceDataService } from "src/app/service/service-data.service";
import { UrlService } from "src/app/service/url.service";
import { Service4RequestResponse } from "src/app/model/service-4-req-res";
import { UtilService } from "src/app/service/util.service";

@Component({
  selector: "app-sprinkler-hosereel-system-ion",
  templateUrl: "./sprinkler-hosereel-system-ion.component.html",
  styleUrls: ["./sprinkler-hosereel-system-ion.component.scss"]
})
export class SprinklerHosereelSystemIonComponent implements OnInit {
  totalPage: number = 2;
  currentPage: number = 1;
  loader: boolean;
  servForm: FormGroup;
  service;
  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService,
    private utilServ: UtilService
  ) {}

  ngOnInit() {
    this.ServFormInit();
  }

  ionViewWillEnter() {
    this.apiServ
      .getService6(this.servData.job.id)
      .then((data: Service4RequestResponse) => {
        this.service = data;
      })
      .catch((error: any) => {})
      .then(() => {
        this.ServFormInit();
      });
  }

  next(): void {
    if (this.currentPage != this.totalPage) {
      this.currentPage = this.currentPage + 1;
    }
  }

  back(): void {
    if (this.currentPage != 1) {
      this.currentPage = this.currentPage - 1;
    }
  }

  save() {
    this.loader = true;
    this.apiServ
      .saveUpdateService6(this.getPayload())
      .then((data: Service4RequestResponse) => {
        this.utilServ.presentBsToast(
          ConstantService.TOAST_SUCCESS,
          "Service saved successfully"
        );
      })
      .catch((error: any) => {})
      .then(() => {
        this.loader = false;
      });
  }

  timeout(): void {
    this.router.navigateByUrl(`/${UrlService.SAVE_JOB}`);
  }

  ServFormInit(): void {
    this.servForm = new FormGroup({
      checkbox_q1: new FormControl(false),
      checkbox_q2: new FormControl(false),
      checkbox_q3: new FormControl(false),
      checkbox_q4: new FormControl(false),
      checkbox_q5: new FormControl(false),
      checkbox_q6: new FormControl(false),
      checkbox_q7: new FormControl(false),
      checkbox_q8: new FormControl(false),
      checkbox_q9: new FormControl(false),
      checkbox_q10: new FormControl(false),
      checkbox_q11: new FormControl(false),
      checkbox_q12: new FormControl(false),
      checkbox_q13: new FormControl(false),
      checkbox_q14: new FormControl(false),
      checkbox_q15: new FormControl(false),
      checkbox_q16: new FormControl(false),
      checkbox_q17: new FormControl(false),
      checkbox_q18: new FormControl(false),
      checkbox_q19: new FormControl(false),
      checkbox_q20: new FormControl(false),
      checkbox_q21: new FormControl(false),
      checkbox_q22: new FormControl(false),
      checkbox_q23: new FormControl(false),

      remarks: new FormControl(this.service ? this.service.remarks : ""),
      exposure_fire_risk: new FormControl(false),
      follow_up_action: new FormControl("")
    });

    if (this.service) {
    }
  }

  getPayload() {
    const payload: any = this.servForm.value;
    if (this.service) {
      payload.id = this.service.id;
    }
    payload.job_id = this.servData.job.id;
    payload.seid = this.authServ.getUser().id.toString();
    return payload;
  }

  ionViewWillLeave() {
    this.loader = null;
    this.service = null;
  }
}
