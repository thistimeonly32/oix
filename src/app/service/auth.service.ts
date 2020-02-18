import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { LoginResponse } from "../model/login-response";
import { ConstantService } from "./constant.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;
  constructor() {}

  login(loginResponse: LoginResponse): void {
    console.log(loginResponse);
    localStorage.setItem(ConstantService.ID, loginResponse.id.toString());
    localStorage.setItem(ConstantService.EMAIL, loginResponse.email);
    localStorage.setItem(ConstantService.EMP_ID, loginResponse.empId);
    localStorage.setItem(
      ConstantService.IS_PASSWORD_RESET,
      loginResponse.isPasswordReset.toString()
    );
    localStorage.setItem(ConstantService.EMP_NAME, loginResponse.name);
    localStorage.setItem(ConstantService.PASSWORD, loginResponse.password);
  }

  logout(): void {
    localStorage.clear();
    this.user = null;
  }

  getUser(): User {
    const user = new User();
    user.id = +localStorage.getItem(ConstantService.ID);
    user.email = localStorage.getItem(ConstantService.EMAIL);
    user.empId = localStorage.getItem(ConstantService.EMP_ID);
    user.isPasswordReset = localStorage.getItem(
      ConstantService.IS_PASSWORD_RESET
    );
    user.name = localStorage.getItem(ConstantService.EMP_NAME);
    user.password = localStorage.getItem(ConstantService.PASSWORD);
    return user;
  }

  isUserLogged(): boolean {
    return localStorage.getItem(ConstantService.ID) ? true : false;
  }
}
