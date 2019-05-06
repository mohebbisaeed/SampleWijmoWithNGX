import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TablesModule} from '../tables/tables.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ToasterModule} from 'angular2-toaster';
import {NgSelectModule} from '@ng-select/ng-select';
import {NbSelectModule} from '@nebular/theme';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjGridGrouppanelModule} from 'wijmo/wijmo.angular2.grid.grouppanel';
import {
  entrySharedKernelRouteComponents,
  SharedKernelRouteComponent,
  SharedKernelRoutingModule
} from "./shared-kernel-routing.module";
import { ProductFeatureCategoryComponent } from './product-feature-category/product-feature-category.component';
import { CreateProductFeatureCategoryComponent } from './product-feature-category/create-product-feature-category/create-product-feature-category.component';
import { ProductFeatureCompatibilityTypeComponent } from './product-feature-compatibility-type/product-feature-compatibility-type.component';
import { CreateProductFeatureCompatibilityTypeComponent } from './product-feature-compatibility-type/create-product-feature-compatibility-type/create-product-feature-compatibility-type.component';
import {ProductFeatureTypeComponent} from "./product-feature-type/product-feature-type.component";
import {CreateProductFeatureTypeComponent} from "./product-feature-type/create-product-feature-type/create-product-feature-type.component";
import { ProductFeatureComponent } from './product-feature/product-feature.component';
import { CreateProductFeatureComponent } from './product-feature/create-product-feature/create-product-feature.component';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SharedKernelRoutingModule,
    ReactiveFormsModule,
    TablesModule,
    Ng2SmartTableModule,
    ToasterModule.forRoot(),
    NgSelectModule,
    NbSelectModule,
    WjInputModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridGrouppanelModule,

  ],
  declarations: [
    ...SharedKernelRouteComponent,
    ProductFeatureCategoryComponent,
    CreateProductFeatureCategoryComponent,
    ProductFeatureCompatibilityTypeComponent,
    CreateProductFeatureCompatibilityTypeComponent,
    ProductFeatureTypeComponent,
    CreateProductFeatureTypeComponent,
    ProductFeatureComponent,
    CreateProductFeatureComponent,

  ],
  entryComponents: [
    ...entrySharedKernelRouteComponents
  ]
})
export class SharedKernelModule {
}
