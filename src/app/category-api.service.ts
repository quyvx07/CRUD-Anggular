import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Category} from './category/category.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  apiUrl = 'http://127.0.0.1:8000/api';
  formData: Category;

  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private router: Router) {
  }

  list() {
    return this.http.get(`${this.apiUrl}/category`);
  }

  create(category) {
    this.http.post(`${this.apiUrl}/category`, category).subscribe(result => console.log(result));
    this.toastr.success('Thành Công');
    this.router.navigate(['/']);
    // var body = JSON.stringify(category);
    // console.log(body);
  }

  delete(id: number) {
    if (confirm('Bạn Muốn Xóa Không?')) {
      this.http.delete(`${this.apiUrl}/category/${id}`).subscribe(result => console.log(result));
      this.toastr.success('Thành Công');
    }
  }

  category(id) {
    return this.http.get(`${this.apiUrl}/category/${id}`);
  }

  update(category) {
    // var body = JSON.stringify(category);
    // console.log(body);
    this.http.put(`${this.apiUrl}/category`, category).subscribe(result => console.log(result));
    this.toastr.success('Thành Công');
  }
}
