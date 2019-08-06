import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryApiService} from '../../category-api.service';
import {Category} from '../category.class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  category: Category;

  constructor(private categoryApiService: CategoryApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  onSubmit(categoryFrom) {
    this.category = new Category();
    this.category['name'] = categoryFrom.name.value;
    this.category['description'] = categoryFrom.description.value;
    this.category['image'] = categoryFrom.image.value;
    this.categoryApiService.create(this.category);
  }
}
