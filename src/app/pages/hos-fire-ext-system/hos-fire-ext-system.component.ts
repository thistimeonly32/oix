import { Component, OnInit } from "@angular/core";
import { ConstantService } from "src/app/service/constant.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ServiceDataService } from "src/app/service/service-data.service";
import { UrlService } from 'src/app/service/url.service';
declare const $: any;

@Component({
  selector: "app-hos-fire-ext-system",
  templateUrl: "./hos-fire-ext-system.component.html",
  styleUrls: ["./hos-fire-ext-system.component.scss"]
})
export class HosFireExtSystemComponent implements OnInit {
  totalPage = 2;
  currentPage = 1;
  constructor( private router: Router,
    private authServ: AuthService,
    private apiServ: ApiService,
    private route: ActivatedRoute,
    private servData: ServiceDataService) {}

  ngOnInit() {}
  
  ionViewWillEnter() {
   
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

  timeout(){
    this.router.navigateByUrl(`/${UrlService.SAVE_JOB}`)
  }

  save(): void {}
}
