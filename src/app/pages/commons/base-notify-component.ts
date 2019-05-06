import {BaseComponent} from './base-component';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import {
  AppSetting_Message_Add_Fail, AppSetting_Message_Add_Success,
  AppSetting_Message_Delete_Fail,
  AppSetting_Message_Delete_Success,
  AppSetting_Message_Edit_Fail,
  AppSetting_Message_Edit_Success
} from './app-setting';
import {ToastrService} from 'ngx-toastr';

export  class BaseNotifyComponent extends BaseComponent{

  config: ToasterConfig;

  constructor( public toastr: ToastrService) {
    super();
  }


  successNotify( content: string) {
    this.toastr.success(content, 'موفقیت');
  }

  errorNotify(title: string, content: string) {
    this.toastr.error(content, 'خطا');
  }

  failNotifyDefault(content: string) {
    this.errorNotify('خطا',content);
  }

  infoNotify(title: string, content: string) {
    //this.showNotification('', content, MessageType.Info);
    this.toastr.info(content, title );
  }

  failDeleteNotify() {
    this.toastr.error(AppSetting_Message_Delete_Fail, 'خطا');
  }

  failDeleteNotifyMessage(message:string) {
    this.toastr.error(message, 'خطا');
  }

  successAddNotify() {
    this.toastr.success(AppSetting_Message_Add_Success, 'موفقیت');
  }

  failAddNotify() {
   // this.showNotification('', AppSetting_Message_Add_Fail, MessageType.Danger);
    this.toastr.error(AppSetting_Message_Add_Fail, 'خطا');
  }

  failAddNotifyMessage(mgs:string) {
    // this.showNotification('', AppSetting_Message_Add_Fail, MessageType.Danger);
    this.toastr.error(mgs, 'خطا');
  }

  successEditNotify() {
    //this.showNotification('', AppSetting_Message_Edit_Success, MessageType.Success);
    this.toastr.success(AppSetting_Message_Edit_Success, 'موفقیت');
  }

  failEditNotify() {
    this.toastr.error(AppSetting_Message_Edit_Fail, 'خطا');
  }

  failEditNotifyMessage(mgs:string  ) {
    this.toastr.error(mgs, 'خطا');
  }

  successDeleteNotify() {
    this.toastr.success(AppSetting_Message_Delete_Success, 'موفقیت');
  }

}
