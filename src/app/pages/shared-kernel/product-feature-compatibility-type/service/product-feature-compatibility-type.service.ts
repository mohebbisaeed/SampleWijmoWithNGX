import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFeatureCompatibilityType} from "../entities/product-feature-compatibility-type.model";

@Injectable({
  providedIn: 'root'
})
export class ProductFeatureCompatibilityTypeService {
  baseUrl = `${environment.apiUrl}ProductFeatureCompatibilityType/`;
  constructor(private http: HttpClient) {
  }
  post(entity: ProductFeatureCompatibilityType): Observable<any> {
    return this.http.post<ProductFeatureCompatibilityType>(`${this.baseUrl}/CreateProductFeatureCompatibilityType`, entity);
  }
}
