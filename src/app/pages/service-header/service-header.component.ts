import { Component, OnInit } from "@angular/core";
import { ConstantService } from "src/app/service/constant.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ServiceDataService } from "src/app/service/service-data.service";
import { UrlService } from "src/app/service/url.service";

@Component({
  selector: "app-service-header",
  templateUrl: "./service-header.component.html",
  styleUrls: ["./service-header.component.scss"]
})
export class ServiceHeaderComponent implements OnInit {
  currentDate: Date = new Date();
  constant: ConstantService = ConstantService;
  jobId: String;
  clientName: String;
  attendace: String;
  checkInTime: String;
  service: String;
  headerForm: FormGroup;

  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    public servData: ServiceDataService
  ) {}

  ngOnInit() {
    // this.headerFormInit();
  }

  ionViewWillEnter() {
    // this.headerFormInit();
  }

  headerFormInit() {
   
  }

  onAttendanceChange(v) {
    this.servData.attendance = v;
  }

  onCheckInTimeChange(v) {
    this.servData.checkInTime = v;
  }

  onServiceChange(v) {
    // alert('onchage: ' + v);
    this.servData.service = v;
    // this.headerForm.patchValue({
    //   service: v
    //   // formControlName2: myValue2 (can be omitted)
    // });
    this.headerFormInit();
    switch (v) {
      case ConstantService.SERVICES_CONST.FIREMAN_INTERCOM_SYSTEM
        .service_type_id:
        this.router.navigateByUrl(
          `/${UrlService.CHECKLIST_FIREMAN_INTERCOM_SYSTEM}`
        );
        break;
      case ConstantService.SERVICES_CONST
        .HOSEREEL_SYSTEM_FIRE_EXTINGUISHER_SYSTEM.service_type_id:
        this.router.navigateByUrl(
          `/${UrlService.CHECKLIST_HOSEREEL_SYSTEM_FIRE_EXTINGUISHER_SYSTEM}`
        );
        break;
      case ConstantService.SERVICES_CONST.SPRINKLER_SYSTEM_HOSEREEL_SYSTEM_ION
        .service_type_id:
        this.router.navigateByUrl(
          `/${UrlService.CHECKLIST_SPRINKLER_SYSTEM_HOSEREEL_SYSTEM_ION}`
        );
        break;
      case ConstantService.SERVICES_CONST.VESDA_SYSTEM.service_type_id:
        this.router.navigateByUrl(`/${UrlService.CHECKLIST_VESDA_SYSTEM}`);
        break;
      case ConstantService.SERVICES_CONST.FIRE_AlARM_SYSTEM.service_type_id:
        this.router.navigateByUrl(`/${UrlService.CHECKLIST_FIRE_ALARM_SYSTEM}`);
        break;
    }
  }

  ionViewWillLeave() {
    this.headerForm = null;
  }
}
