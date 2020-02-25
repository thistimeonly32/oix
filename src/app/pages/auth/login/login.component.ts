import { Component, OnInit } from "@angular/core";
import { ToastController, LoadingController } from "@ionic/angular";
import { UtilService } from "src/app/service/util.service";
import { AuthService } from "src/app/service/auth.service";
import { ApiService } from "src/app/service/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import { LoginRequest } from "src/app/model/login-request";
import { UrlService } from "src/app/service/url.service";
import { LoginResponse } from "src/app/model/login-response";
import { Router } from "@angular/router";
import { ConstantService } from "src/app/service/constant.service";
declare const $: any;
declare const toastr: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginApiLoader: Boolean;
  urlServ: UrlService = UrlService;

  constructor(
    private utilServ: UtilService,
    private authServ: AuthService,
    private apiServ: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    document.body.className = "hold-transition login-page";
    this.loginFormInit();
  }

  ionViewWillEnter() {
    this.loginFormInit();
  }

  loginBtnClick(): void {
    if (this.loginForm.valid) {
      this.loginApiLoader = true;
      this.apiServ
        .login(this.getLoginFormPayload())
        .then((loginResponse: LoginResponse) => {
          this.authServ.login(loginResponse);
          if (!loginResponse.isPasswordReset) {
            this.router.navigateByUrl(UrlService.SE_DASHBOARD);
          } else {
            this.router.navigateByUrl(UrlService.SE_DASHBOARD);
            // this.router.navigateByUrl(UrlService.CHANGE_PASSWORD);
          }
        })
        .catch((error: any) => {
          
          
         
          this.authServ.logout();
        })
        .then(() => {
          this.loginApiLoader = false;
        });
    }
  }

  loginFormInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(
        environment.production ? null : "engac@gmail.com",
        Validators.required
      ),
      password: new FormControl(
        environment.production ? null : "123456",
        Validators.required
      )
    });
  }
  getLoginFormPayload(): LoginRequest {
    const loginRequest = new LoginRequest();
    loginRequest.email = this.loginForm.value.email;
    loginRequest.password = this.loginForm.value.password;
    return loginRequest;
  }
}
