import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFeatureType} from "../entities/product-feature-type.model";

@Injectable({
  providedIn: 'root'
})
export class ProductFeatureTypeService {
  baseUrl = `${environment.apiUrl}ProductFeatureType/`;
  constructor(private http: HttpClient) {
  }
  post(entity: ProductFeatureType): Observable<any> {
    return this.http.post<ProductFeatureType>(`${this.baseUrl}/CreateProductFeatureType`, entity);
  }
}
