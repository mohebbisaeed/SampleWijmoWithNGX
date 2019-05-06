import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFeatureCategoryModel} from "../entities/product-feature-category.model";

@Injectable({
  providedIn: 'root'
})
export class ProductFeatureCategoryService {
  baseUrl = `${environment.apiUrl}ProductFeatureCategory/`;

  constructor(private http: HttpClient) {
  }
  post(entity: ProductFeatureCategoryModel): Observable<any> {
    return this.http.post<ProductFeatureCategoryModel>(`${this.baseUrl}/CreateProductFeatureCategory`, entity);
  }
}
