import {Component, OnInit} from '@angular/core';
import {BackendApiService} from '../backend-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(public api: BackendApiService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(loginForm: HTMLFormElement) {
    console.log(loginForm);
    this.email = loginForm.email.value;
    this.password = loginForm.password.value;
    this.api.login(this.email, this.password).subscribe(result => {
      localStorage.setItem('ACCESS_TOKEN', result.token);
      this.router.navigate(['/']);
    });
  }
}
