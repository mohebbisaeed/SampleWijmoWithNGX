import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFeatureModel} from "../entities/product-feature.model";

@Injectable({
  providedIn: 'root'
})
export class ProductFeatureService {
  baseUrl = `${environment.apiUrl}ProductFeature/`;

  constructor(private http: HttpClient) {
  }
  post(entity: ProductFeatureModel): Observable<any> {
    return this.http.post<ProductFeatureModel>(`${this.baseUrl}/CreateProductFeature`, entity);
  }
  getProductFeatureCategoryDropDown(): Observable<any> {
    return this.http.get(`${this.baseUrl}GetProductFeatureCategoryDropDown`);
  }
}
