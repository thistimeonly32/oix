import { Component, OnInit } from "@angular/core";
import { ConstantService } from "src/app/service/constant.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ServiceDataService } from "src/app/service/service-data.service";

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
    this.headerFormInit();
  }

  headerFormInit() {
    this.headerForm = new FormGroup({
      attendance: new FormControl(this.servData.attendance),
      checkInTime: new FormControl(this.servData.checkInTime),
      service: new FormControl(this.servData.attendance)
    });
  }
}
