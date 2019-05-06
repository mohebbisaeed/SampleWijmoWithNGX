import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CreateProductFeatureCategoryComponent} from "./create-product-feature-category/create-product-feature-category.component";

@Component({
  selector: 'ngx-product-feature-category',
  templateUrl: './product-feature-category.component.html',
  styleUrls: ['./product-feature-category.component.scss']
})
export class ProductFeatureCategoryComponent implements OnInit {

  constructor(private modalService: NgbModal,
              public toastr: ToastrService,
  ) { }

  ngOnInit() {
  }
  addHandler() {
    const activeModal = this.modalService.open(CreateProductFeatureCategoryComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.result.then((data) => {
    //  this.loadData();
    }, (reason) => {
    });
  }
}
