import {Component, OnInit, QueryList} from '@angular/core';
import {BaseNotifyComponent} from "../../../commons/base-notify-component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ValidationResult} from "../../../commons/validation-result";
import {ValidateStateEnum} from "../../../commons/validate-state-enum";
import {ProductFeatureService} from "../service/product-feature.service";
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import {forkJoin} from "rxjs";

@Component({
  selector: 'ngx-create-product-feature',
  templateUrl: './create-product-feature.component.html',
  styleUrls: ['./create-product-feature.component.scss']
})
export class CreateProductFeatureComponent extends BaseNotifyComponent implements OnInit {
  formGroup: FormGroup;
  options =  [{id: 34, description: 'Adding new item'}];
  ProductFeatureCategory = [];
  constructor(private activeModal: NgbActiveModal,
              private builder: FormBuilder,
              private ProductFeatureService:ProductFeatureService,
              public toastr: ToastrService) {
    super(toastr);
  }
  ngOnInit() {
    this.createForm();
    this.initData();
  }
  initData() {
     forkJoin(
      this.ProductFeatureService.getProductFeatureCategoryDropDown()
    //  // this.service.getInit(this.headerId),
    //  // this.service.getMonthlyPlanHeaderById(this.headerId),
     ).subscribe((res) => {
    //   debugger
         this.ProductFeatureCategory = res[0].Entities;
    //   //this.modelForm.patchValue(res[1].Entity);
     });
  }
  createForm() {
    this.formGroup = this.builder.group({
      Id: '',
      ProductFeatureCategoryId:new FormControl('',Validators.required),
      FeatureValue: new FormControl( '',Validators.required),
    });
  }
  selected(ccc){}
  save() {
    if (this.formGroup.valid === true) {
      this.ProductFeatureService.post(this.formGroup.value).subscribe((res: ValidationResult) => {
        //this.notifyService.successAddNotify();
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

