import {Component, OnInit} from '@angular/core';
import {CategoryApiService} from '../../category-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../category.class';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  category: Category;

  constructor(private categoryApiService: CategoryApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCategory(params['id']);
    });
  }

  getCategory(id: number) {
    this.categoryApiService.category(id).subscribe(r => this.category = r['data']);
  }

  onSubmit(categoryFrom) {
    this.category['name'] = categoryFrom.name.value;
    this.category['description'] = categoryFrom.description.value;
    this.category['image'] = categoryFrom.image.value;
    this.categoryApiService.update(this.category).subscribe(result => {
      this.toastr.success('Thành Công');
    });
    this.router.navigate(['']);
  }
}
