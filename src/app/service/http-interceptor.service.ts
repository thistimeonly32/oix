import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { throwError } from "rxjs";
import { UtilService } from "./util.service";
import { ConstantService } from "./constant.service";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorService {
  constructor(private utilServ: UtilService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      map((data: any) => {
        if (!environment.production) {
          console.log(data);
        }
        return data;
      }),
      catchError((error: any) => {
        if (!environment.production) {
          console.log(error);
        }

        switch (error.status) {
          case 401:
            this.utilServ.presentBsToast(
              ConstantService.TOAST_ERROR,
              error.error.errorMsg
            );
            break;
          case 400:
            this.utilServ.presentBsToast(
              ConstantService.TOAST_ERROR,
              error.error.errorMsg
            );
            break;
          case 500:
            this.utilServ.presentBsToast(
              ConstantService.TOAST_ERROR,
              'Internal Server Error. Please try again later.'
            );
            break;
          default:
            break;
        }

        return throwError(error);
      })
    );
  }
}
