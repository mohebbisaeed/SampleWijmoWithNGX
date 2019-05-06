import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  baseUrl = `${environment.controllerUrl}Home`;
  constructor(private http:HttpClient,
              ) { }

  exit() : Observable<any>
  {
    debugger;
    return  this.http.get(`${this.baseUrl}/Logout`);
  }
}
