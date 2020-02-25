import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../model/login-request";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../model/login-response";
import { JobsResponse } from "../model/jobs-response";
import { JobByIdResponse } from "../model/job-by-id-response";
import { SaveJobRequest } from "../model/save-job-request";
import { Service4RequestResponse } from "../model/service-4-req-res";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(loginReq: LoginRequest): Promise<LoginResponse> {
    return this.http
      .post(`${environment.apiURL}/user_login`, loginReq)
      .toPromise() as Promise<LoginResponse>;
  }

  getAllJobs(seId: number): Promise<JobsResponse> {
    return this.http
      .get(`${environment.apiURL}/get_all_jobs_by_service_eng_id/${seId}`)
      .toPromise() as Promise<JobsResponse>;
  }

  getJobById(asJobId: string): Promise<JobByIdResponse> {
    return this.http
      .get(`${environment.apiURL}/get_job_detail_by_job_id/${asJobId}`)
      .toPromise() as Promise<JobByIdResponse>;
  }

  saveJob(saveJobReq: SaveJobRequest): Promise<any> {
    return this.http
      .post(`${environment.apiURL}/Save_job`, saveJobReq)
      .toPromise() as Promise<any>;
  }

  // Hosereel System & Fire Extinguisher System
  saveUpdateService4(service4Req: Service4RequestResponse): Promise<any> {
    return this.http
      .post(
        `${environment.apiURL}/hosereel_fire_extinguisher_service`,
        service4Req
      )
      .toPromise() as Promise<any>;
  }

  // Hosereel System & Fire Extinguisher System
  getService4(asJobId): Promise<Service4RequestResponse> {
    return this.http
      .get(
        `${environment.apiURL}/get_hosereel_extinguisherm_service_detail_by_assign_job_id/${asJobId}`
      )
      .toPromise() as Promise<Service4RequestResponse>;
  }

  // Fireman Intercom
  saveUpdateService5(payload): Promise<any> {
    return this.http
      .post(`${environment.apiURL}/fireman_intercom_system_service`, payload)
      .toPromise() as Promise<any>;
  }

  // Fireman Intercom
  getService5(asJobId): Promise<any> {
    return this.http
      .get(
        `${environment.apiURL}/get_fireman_intercom_service_detail_by_assign_job_id/${asJobId}`
      )
      .toPromise() as Promise<any>;
  }

  // Fireman Intercom
  saveUpdateService3(payload): Promise<any> {
    return this.http
      .post(`${environment.apiURL}/vesda_service`, payload)
      .toPromise() as Promise<any>;
  }

  // Fireman Intercom
  getService3(asJobId): Promise<any> {
    return this.http
      .get(
        `${environment.apiURL}/get_vesda_service_detail_by_assign_job_id/${asJobId}`
      )
      .toPromise() as Promise<any>;
  }

  // Fire Alarm System
  saveUpdateService1(payload): Promise<any> {
    return this.http
      .post(`${environment.apiURL}/fire_alarm_service`, payload)
      .toPromise() as Promise<any>;
  }

  // Fire Alarm System
  getService1(asJobId): Promise<any> {
    return this.http
      .get(
        `${environment.apiURL}/get_fire_alarm_service_detail_by_assign_job_id/${asJobId}`
      )
      .toPromise() as Promise<any>;
  }

  // Sprinkler System & Hosereel System_Ion
  saveUpdateService6(payload): Promise<any> {
    return this.http
      .post(
        `${environment.apiURL}/sprinkler_hosereel_system_ion_service`,
        payload
      )
      .toPromise() as Promise<any>;
  }

  // Sprinkler System & Hosereel System_Ion
  getService6(asJobId): Promise<any> {
    return this.http
      .get(
        `${environment.apiURL}/get_sprinkler_hosereel_ion_service_detail_by_assign_job_id/${asJobId}`
      )
      .toPromise() as Promise<any>;
  }
}
