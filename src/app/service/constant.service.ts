import { Injectable } from "@angular/core";

export class ConstantService {
  public static ID: string = "qzxwe";
  public static EMP_ID: string = "ewqxz";
  public static EMP_NAME: string = "ertfds";
  public static EMAIL: string = "ewrtfdd2";
  public static IS_PASSWORD_RESET: string = "ewrtf323dd";
  public static PASSWORD: string = "ewrtfqw4dd";

  public static TOAST_SUCCESS = "success";
  public static TOAST_INFO = "info";
  public static TOAST_ERROR = "error";
  public static TOAST_WARNING = "warning";

  public static ATTENDANCE = [
    {
      id: '1',
      type: "Response Call"
    },
    {
      id: '2',
      type: "Warranty/DLP"
    }
  ];

  public static CHECK_IN_TIME = [
    {
      id: '1',
      type: "Office Hour"
    },
    {
      id: '2',
      type: "After Office Hour"
    }
  ];

  public static SERVICES = [
    {
      service_type_id: "1",
      name: "Fire Alarm System",
      description: "Fire Alarm"
    },
    {
      service_type_id: "3",
      name: "Vesda System",
      description: "Vesda System"
    },
    {
      service_type_id: "4",
      name: "Hosereel System & Fire Extinguisher System",
      description: "Hosereel System & Fire Extinguisher"
    },
    {
      service_type_id: "5",
      name: "Fireman Intercom System",
      description: "Fireman Intercom System"
    },
    {
      service_type_id: "6",
      name: "Sprinkler System & Hosereel System_Ion",
      description: "Sprinkler System & Hosereel System_Ion"
    }
  ];

  public static DEFAULT_SERVICE_ID = '4';

  constructor() {}
}
