import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  public static SE_DASHBOARD = "se-dashboard";
  public static LOGIN = "login";
  public static FORGOT_PASSWORD = "forgot-password";
  public static CHANGE_PASSWORD = "change-password";
  public static VIEW_JOB = "job-view";
  public static SAVE_JOB = "save-job";
  public static CHECKLIST_FIRE_ALARM_SYSTEM = "checklist-fas";
  public static CHECKLIST_HOSEREEL_SYSTEM_FIRE_EXTINGUISHER_SYSTEM = "checklist-hsfes";
  public static CHECKLIST_FIREMAN_INTERCOM_SYSTEM = "checklist-hos-fis";
  public static CHECKLIST_VESDA_SYSTEM = "checklist-vesda";
  public static CHECKLIST_SPRINKLER_SYSTEM_HOSEREEL_SYSTEM_ION = "checklist-sshsi";
  constructor() {}
}
