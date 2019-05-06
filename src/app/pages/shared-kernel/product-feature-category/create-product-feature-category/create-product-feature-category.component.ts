import { Component, OnInit } from '@angular/core';
import {BaseNotifyComponent} from "../../../commons/base-notify-component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ProductFeatureCategoryService} from "../service/product-feature-category.service";
import {ValidationResult} from "../../../commons/validation-result";
import {ValidateStateEnum} from "../../../commons/validate-state-enum";


@Component({
  selector: 'ngx-create-product-feature-category',
  templateUrl: './create-product-feature-category.component.html',
  styleUrls: ['./create-product-feature-category.component.scss']
})
export class CreateProductFeatureCategoryComponent extends BaseNotifyComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private activeModal: NgbActiveModal,
              private builder: FormBuilder,
              private ProductFeatureCategoryService:ProductFeatureCategoryService,
              public toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.builder.group({
      Id: '',
      Description: new FormControl('', Validators.required),
    });
  }

  save() {
    debugger
     if (this.formGroup.valid === true) {
       debugger
       this.ProductFeatureCategoryService.post(this.formGroup.value).subscribe((res: ValidationResult) => {
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
