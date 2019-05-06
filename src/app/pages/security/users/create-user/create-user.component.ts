import {Component, OnInit} from '@angular/core';
import {BaseNotifyComponent} from '../../../commons/base-notify-component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../services/user.service';
import {ValidationResult} from '../../../commons/validation-result';
import {ValidateStateEnum} from '../../../commons/validate-state-enum';

@Component({
  selector: 'ngx-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent extends BaseNotifyComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private activeModal: NgbActiveModal,
              private builder: FormBuilder,
              private userService: UserService,
              public toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.builder.group({
      Id: '',
      UserName: new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      IsActive: true
    });
  }

  save() {
    debugger;
    if (this.formGroup.valid === true) {
      this.userService.post(this.formGroup.value).subscribe((res: ValidationResult) => {
        //TODO
        //this.notifyService.successAddNotify();
        debugger;
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successAddNotify();
          this.activeModal.close(true);
        } else {
          this.failAddNotifyMessage(res.SummeryMessage);
        }
        //this.successAddNotify();
        //this.activeModal.close(false);
      });
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  closeModal() {
    this.activeModal.dismiss(false);
  }

}
