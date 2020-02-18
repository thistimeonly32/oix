import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ConstantService } from "./constant.service";
declare const $: any;
declare const toastr: any;

@Injectable({
  providedIn: "root"
})
export class UtilService {
  constructor(private toast: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async presentBsToast(toastType: string, message: string) {
    switch (toastType) {
      case ConstantService.TOAST_SUCCESS:
        toastr.success(message);
        break;
      case ConstantService.TOAST_WARNING:
        toastr.warning(message);
        break;
      case ConstantService.TOAST_INFO:
        toastr.info(message);
        break;
      case ConstantService.TOAST_ERROR:
        toastr.error(message);
        break;
    }
  }
}
