import { Component, OnInit } from '@angular/core';
import {BaseNotifyComponent} from "../../../commons/base-notify-component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ValidationResult} from "../../../commons/validation-result";
import {ValidateStateEnum} from "../../../commons/validate-state-enum";
import {ProductFeatureTypeService} from "../service/product-feature-type.service";

@Component({
  selector: 'ngx-create-product-feature-type',
  templateUrl: './create-product-feature-type.component.html',
  styleUrls: ['./create-product-feature-type.component.scss']
})
export class CreateProductFeatureTypeComponent extends BaseNotifyComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private activeModal: NgbActiveModal,
              private builder: FormBuilder,
              private ProductFeatureTypeService:ProductFeatureTypeService,
              public toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.builder.group({
      Id: '',
      Name: new FormControl('', Validators.required),
    });
  }

  save() {
    debugger
    if (this.formGroup.valid === true) {
      debugger
      this.ProductFeatureTypeService.post(this.formGroup.value).subscribe((res: ValidationResult) => {
        //this.notifyService.successAddNotify();
        debugger
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successAddNotify();
          this.activeModal.close(true);
        } else {
          this.failAddNotifyMessage(res.SummeryMessage);
        }
        this.successAddNotify();
        this.activeModal.close(false);
      });
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  closeModal() {
    this.activeModal.dismiss(false);
  }

}
