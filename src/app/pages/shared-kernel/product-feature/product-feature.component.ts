import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CreateProductFeatureComponent} from "./create-product-feature/create-product-feature.component";
import {ServerCollectionView} from "../../commons/server-collection-view-base";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ngx-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.scss']
})
export class ProductFeatureComponent implements OnInit {
  view: any;

  constructor(private modalService: NgbModal,
              public toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.view = [{id: "sd"}]
    // this.view = new ServerCollectionView(`${environment.apiUrl}SampleData/Get`, {
    //   pageSize: 12,
    //   filterDefinition: 'user eq '
    // });
  }
  addHandler() {
    const activeModal = this.modalService.open(CreateProductFeatureComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.result.then((data) => {
      //  this.loadData();
    }, (reason) => {
    });
  }
}
