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
declare const $: any;

@Component({
  selector: "app-hos-fire-ext-system",
  templateUrl: "./hos-fire-ext-system.component.html",
  styleUrls: ["./hos-fire-ext-system.component.scss"]
})
export class HosFireExtSystemComponent implements OnInit {
  totalPage: number = 2;
  currentPage: number = 1;
  loader: boolean;
  servForm: FormGroup;
  service: Service4RequestResponse;
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
      .getService4(this.servData.job.id)
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
      .saveUpdateService4(this.getPayload())
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
      remarks: new FormControl(this.service ? this.service.remarks : ""),
      exposure_fire_risk: new FormControl(false),
      follow_up_action: new FormControl("")
    });
    
    if (this.service) {
      
    }
  }

  getPayload(): Service4RequestResponse {
    const payload = new Service4RequestResponse();
    if (this.service) {
      payload.id = this.service.id;
    }
    payload.job_id = this.servData.job.id;
    payload.seid = this.authServ.getUser().id.toString();
    payload.checkbox_q1 = this.servForm.value.checkbox_q1;
    payload.checkbox_q2 = this.servForm.value.checkbox_q2;
    payload.checkbox_q3 = this.servForm.value.checkbox_q3;
    payload.checkbox_q4 = this.servForm.value.checkbox_q4;
    payload.checkbox_q5 = this.servForm.value.checkbox_q5;
    payload.checkbox_q6 = this.servForm.value.checkbox_q6;
    payload.checkbox_q7 = this.servForm.value.checkbox_q7;
    payload.checkbox_q8 = this.servForm.value.checkbox_q8;
    payload.checkbox_q9 = this.servForm.value.checkbox_q9;
    payload.checkbox_q10 = this.servForm.value.checkbox_q10;
    payload.checkbox_q11 = this.servForm.value.checkbox_q11;
    payload.checkbox_q12 = this.servForm.value.checkbox_q12;
    payload.checkbox_q13 = this.servForm.value.checkbox_q13;
    payload.checkbox_q14 = this.servForm.value.checkbox_q14;
    payload.checkbox_q15 = this.servForm.value.checkbox_q15;
    payload.checkbox_q16 = this.servForm.value.checkbox_q16;
    payload.checkbox_q17 = this.servForm.value.checkbox_q17;
    payload.checkbox_q18 = this.servForm.value.checkbox_q18;
    payload.checkbox_q19 = this.servForm.value.checkbox_q19;
    payload.checkbox_q20 = this.servForm.value.checkbox_q20;
    payload.remarks = this.servForm.value.remarks;
    payload.exposure_fire_risk = this.servForm.value.exposure_fire_risk;
    payload.follow_up_action = this.servForm.value.follow_up_action;
    return payload;
  }

  getService() {}

  ionViewWillLeave() {
    this.loader = null;
    this.service = null;
  }
}
