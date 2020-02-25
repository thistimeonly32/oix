import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { ServiceDataService } from "src/app/service/service-data.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SaveJobRequest } from "src/app/model/save-job-request";
import { UtilService } from "src/app/service/util.service";
import { ConstantService } from "src/app/service/constant.service";
import { LoginRequest } from "src/app/model/login-request";

@Component({
  selector: "app-save-job",
  templateUrl: "./save-job.component.html",
  styleUrls: ["./save-job.component.scss"]
})
export class SaveJobComponent implements OnInit {
  jobForm: FormGroup;
  saveJobLoader: boolean;
  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService,
    private utilServ: UtilService
  ) {}

  ngOnInit() {
    this.jobFormInit();
  }

  ionViewWillEnter() {
    this.jobFormInit();
  }

  jobFormInit() {
    this.jobForm = new FormGroup({
      quotationRequired: new FormControl("0"),
      quotation: new FormControl(null)
    });
    // header('Access-Control-Allow-Origin: *');
    //     header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    //     header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    //     $method = $_SERVER['REQUEST_METHOD'];
    //     if($method == "OPTIONS") {
    //         die();
    //     }
  }

  saveJob() {
    this.saveJobLoader = true;
    this.apiServ
      .saveJob(this.getSaveJobPayload())
      .then((data: any) => {
        this.utilServ.presentBsToast(
          ConstantService.TOAST_SUCCESS,
          "Job submitted successfully"
        );
      })
      .catch((error: any) => {
      })
      .then(() => {
        this.saveJobLoader = false;
      });
  }

  getSaveJobPayload(): SaveJobRequest {
    const payload = new SaveJobRequest();
    payload.attendance = this.servData.attendance;
    payload.check_in_time = this.servData.checkInTime;
    payload.job_id = this.servData.job.id;
    payload.quatation = this.jobForm.value.quotation;
    payload.quatation_required = this.jobForm.value.quotationRequired;
    payload.seid = this.authServ.getUser().id.toString();
    return payload;
  }

  ionViewWillLeave() {
    this.saveJobLoader = null;
  }
}
