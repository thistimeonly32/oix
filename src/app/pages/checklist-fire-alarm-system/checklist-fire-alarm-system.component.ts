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
  selector: "app-checklist-fire-alarm-system",
  templateUrl: "./checklist-fire-alarm-system.component.html",
  styleUrls: ["./checklist-fire-alarm-system.component.scss"]
})
export class ChecklistFireAlarmSystemComponent implements OnInit {
  totalPage: number = 3;
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
      .getService1(this.servData.job.id)
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
      .saveUpdateService1(this.getPayload())
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

      q1_check: new FormControl(false),
      q2_check: new FormControl(false),
      q3_check: new FormControl(false),
      q4_check: new FormControl(false),
      q5_check: new FormControl(false),
      q6_check: new FormControl(false),
      q7_check: new FormControl(false),
      q8_check: new FormControl(false),
      q9_check: new FormControl(false),
      q10_check: new FormControl(false),
      q11_check: new FormControl(false),
      q12_check: new FormControl(false),
      q13_check: new FormControl(false),
      q14_check: new FormControl(false),
      q15_check: new FormControl(false),
      q16_check: new FormControl(false),
      q17_check: new FormControl(false),
      q18_check: new FormControl(false),
      q19_check: new FormControl(false),
      q20_check: new FormControl(false),
      q21_check: new FormControl(false),
      q22_check: new FormControl(false),
      q23_check: new FormControl(false),
      q24_check: new FormControl(false),
      q25_check: new FormControl(false),
      q26_check: new FormControl(false),

      q1_tested: new FormControl(false),
      q2_tested: new FormControl(false),
      q3_tested: new FormControl(false),
      q4_tested: new FormControl(false),
      q5_tested: new FormControl(false),
      q6_tested: new FormControl(false),
      q7_tested: new FormControl(false),
      q8_tested: new FormControl(false),
      q9_tested: new FormControl(false),
      q10_tested: new FormControl(false),
      q11_tested: new FormControl(false),
      q12_tested: new FormControl(false),
      q13_tested: new FormControl(false),
      q14_tested: new FormControl(false),
      q15_tested: new FormControl(false),
      q16_tested: new FormControl(false),
      q17_tested: new FormControl(false),
      q18_tested: new FormControl(false),
      q19_tested: new FormControl(false),
      q20_tested: new FormControl(false),
      q21_tested: new FormControl(false),
      q22_tested: new FormControl(false),
      q23_tested: new FormControl(false),
      q24_tested: new FormControl(false),
      q25_tested: new FormControl(false),
      q26_tested: new FormControl(false),

      q1_remarks: new FormControl(""),
      q2_remarks: new FormControl(""),
      q3_remarks: new FormControl(""),
      q4_remarks: new FormControl(""),
      q5_remarks: new FormControl(""),
      q6_remarks: new FormControl(""),
      q7_remarks: new FormControl(""),
      q8_remarks: new FormControl(""),
      q9_remarks: new FormControl(""),
      q10_remarks: new FormControl(""),
      q11_remarks: new FormControl(""),
      q12_remarks: new FormControl(""),
      q13_remarks: new FormControl(""),
      q14_remarks: new FormControl(""),
      q15_remarks: new FormControl(""),
      q16_remarks: new FormControl(""),
      q17_remarks: new FormControl(""),
      q18_remarks: new FormControl(""),
      q19_remarks: new FormControl(""),
      q20_remarks: new FormControl(""),
      q21_remarks: new FormControl(""),
      q22_remarks: new FormControl(""),
      q23_remarks: new FormControl(""),
      q24_remarks: new FormControl(""),
      q25_remarks: new FormControl(""),
      q26_remarks: new FormControl(""),

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
