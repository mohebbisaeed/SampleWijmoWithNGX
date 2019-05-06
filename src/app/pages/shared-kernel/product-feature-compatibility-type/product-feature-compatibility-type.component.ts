import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CreateProductFeatureCompatibilityTypeComponent} from "./create-product-feature-compatibility-type/create-product-feature-compatibility-type.component";

@Component({
  selector: 'ngx-product-feature-compatibility-type',
  templateUrl: './product-feature-compatibility-type.component.html',
  styleUrls: ['./product-feature-compatibility-type.component.scss']
})
export class ProductFeatureCompatibilityTypeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              public toastr: ToastrService,
  ) { }

  ngOnInit() {
  }
  addHandler() {
    const activeModal = this.modalService.open(CreateProductFeatureCompatibilityTypeComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.result.then((data) => {
      //  this.loadData();
    }, (reason) => {
    });
  }
}
