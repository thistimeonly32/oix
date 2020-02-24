import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { ServiceDataService } from "src/app/service/service-data.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-save-job",
  templateUrl: "./save-job.component.html",
  styleUrls: ["./save-job.component.scss"]
})
export class SaveJobComponent implements OnInit {
  jobForm: FormGroup;
  constructor(
    private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService
  ) {}

  ngOnInit() {
    this.jobFormInit();
  }

  ionViewWillEnter() {
    this.jobFormInit();
  }

  jobFormInit() {
    this.jobForm = new FormGroup({
      quotationRequired: new FormControl('0'),
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
}
