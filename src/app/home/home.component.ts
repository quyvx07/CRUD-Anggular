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
              public backendApi: BackendApiService
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

  list() {
    this.categoryApiService.list().subscribe(result => {
      this.categories = result['data'];
    });
  }

  loguot() {
    this.backendApi.loguot();
  }

  onDelete(id: number) {
    this.categoryApiService.delete(id);
  }

}
