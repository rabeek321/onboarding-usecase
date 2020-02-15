import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loader: false;
  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private router: Router,
    public httpService: HttpService
  ) { }

  /*
   * @param
   * Get login form controll access
   */
  get login() {
    return this.loginForm.controls;
  }

  /*
   * @param Login Validate
   * Validate login form with credentials
   * @input sapId and password
   */
  validateLogin() {
    if (this.loginForm.valid) {
      const postObj = {
        uName: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      // tslint:disable-next-line: deprecation
      this.httpService.checkLogin(postObj).subscribe(
        user => {
          console.log(user);
          if (user) {
            const userDetails = {
              customerId: user.userId
            };
            this.router.navigate(['/user']);
            sessionStorage.setItem('currentUser', JSON.stringify(userDetails));
            this.loader = false;
          }
        },
        error => {
          this.loader = false;
        }
      );
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
  /*
   * @param create form
   * Create form group object for login form
   */
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(\'https://mobirise.com/extensions/strategyamp/assets/images/mbr-1.jpg\') no-repeat center center fixed';
    this.createForm();
  }
}
