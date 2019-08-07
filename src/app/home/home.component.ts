import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryApiService} from '../category-api.service';
import {ToastrService} from 'ngx-toastr';
import {BackendApiService} from '../backend-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogined = false;
  accessToken = '';
  categories: any;
  category: any;

  constructor(public categoryApiService: CategoryApiService,
              public backendApi: BackendApiService,
              private toastr: ToastrService,
  ) {
    this.list();
  }

  ngOnInit() {
    this.accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (this.accessToken !== null) {
      this.isLogined = true;
    }
    this.list();
  }

  search(form: string) {
    let data = {
      'keyword': form['keyword'].value
    };
    this.categoryApiService.search(data).subscribe(result => {
      if (result['status'] === 'success') {
        this.categories = result['data'];
        this.toastr.success('Thành Công');
      } else {
        this.toastr.warning(result['message'], data['keyword']);
      }
    });
  }

  list() {
    this.categoryApiService.list().subscribe(result => {
      this.categories = result['data'];
    });
  }

  logout() {
    this.backendApi.logout();
    // window.location.href = '';
  }

  onDelete(id: number) {
    // this.categoryApiService.delete(id);
    // this.list();
    if (confirm('Bạn Muốn Xóa Không?')) {
      this.categoryApiService.delete(id).subscribe(result => {
        this.toastr.success('Thành Công');
        this.list();
      });
    }
  }

}
