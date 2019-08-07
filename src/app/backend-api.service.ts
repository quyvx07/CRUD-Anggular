import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  apiUrl = 'http://127.0.0.1:8000/api';
  private isLoggedIn = new Subject();

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    this.isLoggedIn.next(true);
    const data = {email, password};
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.clear();
    this.http.post(`${this.apiUrl}/logout`, 'loguot');
  }


  getProfile() {
    return this.http.get(`${this.apiUrl}/user`);
  }

  // Sử dụng interceptor nên sẽ không cần cách này:

  // getOptions() {
  //   const token = localStorage.getItem('ACCESS_TOKEN');
  //   const options = {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   };
  //   return options;
  // }
}
