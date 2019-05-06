import {Component, Input, OnInit} from '@angular/core';
import {BaseNotifyComponent} from '../../../commons/base-notify-component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {ValidationResult} from '../../../commons/validation-result';
import {ValidateStateEnum} from '../../../commons/validate-state-enum';

@Component({
  selector: 'ngx-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent extends BaseNotifyComponent implements OnInit {

  formGroup: FormGroup;
  @Input() id: string;

  constructor(private activeModal: NgbActiveModal,
              private builder: FormBuilder,
              private userService: UserService,
              public toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit() {
    this.createForm();
    this.initialing();
  }

  initialing()
  {
    this.userService.get(this.id).subscribe(res=>{
      this.formGroup.patchValue(res);
    });
  }

  createForm() {
    this.formGroup = this.builder.group({
      Id: '',
      UserName: new FormControl({value: 'c', disabled: true}, Validators.required),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      IsActive: true
    });
  }

  save() {
    debugger;
    if (this.formGroup.valid === true) {
      this.userService.put(this.id, this.formGroup.value).subscribe((res: ValidationResult) => {
        //TODO
        //this.notifyService.successAddNotify();
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successEditNotify();
          this.activeModal.close(true);
        } else {
          this.failEditNotifyMessage(res.SummeryMessage);
        }
        // this.successAddNotify();
        // this.activeModal.close(true );
      });
    }
    else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  closeModal() {
    this.activeModal.dismiss(false);
  }

}
