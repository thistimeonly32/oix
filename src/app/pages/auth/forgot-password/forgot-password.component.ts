import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.body.className = "hold-transition login-page";
  }
}
