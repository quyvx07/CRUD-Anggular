import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  list() {
    return this.http.get(`${this.apiUrl}/category`);
  }

  search(keyword) {
    return this.http.post(`${this.apiUrl}/category/search`, keyword);
  }

  create(category) {
    return this.http.post(`${this.apiUrl}/category`, category);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/category/${id}`);
  }

  category(id) {
    return this.http.get(`${this.apiUrl}/category/${id}`);
  }

  update(category) {
    return this.http.put(`${this.apiUrl}/category`, category);
  }
}
