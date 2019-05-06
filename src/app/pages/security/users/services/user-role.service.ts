import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRoleModel} from '../entities/user-role.model';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  baseUrl = `${environment.apiUrl}UserRole`;

  constructor(private http: HttpClient) { }

  post(entity: UserRoleModel): Observable<any> {
    return this.http.post<UserRoleModel>(`${this.baseUrl}`, entity);
  }

  delete(roleId: number, userId : string  ): Observable<any> {
    return this.http.delete(`${this.baseUrl}?roleId=${roleId}&userId=${userId}`);
  }
}
