import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  public static SE_DASHBOARD = "se-dashboard";
  public static LOGIN = "login";
  public static FORGOT_PASSWORD = "forgot-password";
  public static CHANGE_PASSWORD = "change-password";
  public static VIEW_JOB = "view-job";
  constructor() {}
}
