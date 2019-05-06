import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfirmDeleteComponent} from '../components/confirm-delete/confirm-delete.component';
import {MainSharedKernelComponent} from "./main-shared-kernel/main-shared-kernel.component";
import {SampleComponentComponent} from "./sample-component/sample-component.component";
import {ProductFeatureCategoryComponent} from "./product-feature-category/product-feature-category.component";
import {CreateProductFeatureCategoryComponent} from "./product-feature-category/create-product-feature-category/create-product-feature-category.component";
import {ProductFeatureCompatibilityTypeComponent} from "./product-feature-compatibility-type/product-feature-compatibility-type.component";
import {CreateProductFeatureCompatibilityTypeComponent} from "./product-feature-compatibility-type/create-product-feature-compatibility-type/create-product-feature-compatibility-type.component";
import {ProductFeatureTypeComponent} from "./product-feature-type/product-feature-type.component";
import {CreateProductFeatureTypeComponent} from "./product-feature-type/create-product-feature-type/create-product-feature-type.component";
import {CreateProductFeatureComponent} from "./product-feature/create-product-feature/create-product-feature.component";
import {ProductFeatureComponent} from "./product-feature/product-feature.component";

const routes: Routes = [{
  path: '',
  component: MainSharedKernelComponent,
  children: [
    {
    path: 'sample',
    component: SampleComponentComponent,
    },
    {
      path: 'ProductFeatureCategory',
      component: ProductFeatureCategoryComponent,
    },
    {
      path: 'ProductFeatureCompatibilityType',
      component: ProductFeatureCompatibilityTypeComponent,
    },
    {
      path: 'ProductFeatureType',
      component: ProductFeatureTypeComponent,
    },
    {
      path: 'ProductFeature',
      component: ProductFeatureComponent,
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SharedKernelRoutingModule {
}

export const SharedKernelRouteComponent = [
  ConfirmDeleteComponent,
  SampleComponentComponent,
  MainSharedKernelComponent,
  ConfirmDeleteComponent,
  CreateProductFeatureCategoryComponent,
  CreateProductFeatureCompatibilityTypeComponent,
  CreateProductFeatureTypeComponent,
  CreateProductFeatureComponent
];

export const entrySharedKernelRouteComponents = [
  ConfirmDeleteComponent,
  CreateProductFeatureCategoryComponent,
  CreateProductFeatureCompatibilityTypeComponent,
  CreateProductFeatureTypeComponent,
  CreateProductFeatureComponent
];
