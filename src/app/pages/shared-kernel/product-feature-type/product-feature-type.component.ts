import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CreateProductFeatureTypeComponent} from "./create-product-feature-type/create-product-feature-type.component";

@Component({
  selector: 'ngx-product-feature-compatibility-type',
  templateUrl: './product-feature-type.component.html',
  styleUrls: ['./product-feature-type.component.scss']
})
export class ProductFeatureTypeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              public toastr: ToastrService,
  ) { }

  ngOnInit() {
  }
  addHandler() {
    const activeModal = this.modalService.open(CreateProductFeatureTypeComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.result.then((data) => {
      //  this.loadData();
    }, (reason) => {
    });
  }
}
