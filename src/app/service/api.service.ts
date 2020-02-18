import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../model/login-request";
import { environment } from "src/environments/environment";
import { LoginResponse } from "../model/login-response";

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
}
