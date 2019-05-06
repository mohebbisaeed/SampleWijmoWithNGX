import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../entities/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `${environment.apiUrl}SampleData`;

  constructor(private http: HttpClient) { }

  post(entity: UserModel): Observable<any> {
    return this.http.post<UserModel>(`${this.baseUrl}`, entity);
  }

  put(id,entity: UserModel): Observable<any> {
    return this.http.put<UserModel>(`${this.baseUrl}?id=${id}`, entity);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?id=${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }
}
