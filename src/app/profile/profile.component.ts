import {Component, OnInit} from '@angular/core';
import {BackendApiService} from '../backend-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = '';
  email = '';

  constructor(public api: BackendApiService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.getProfile();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getProfile() {
    this.api.getProfile().subscribe(result => {
      console.log(result);
      this.name = result['name'];
      this.email = result['email'];
    });
  }
}
