import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
  get register() { return this.registerForm.controls; }

  /*
  * @param Login Validate
  * Validate login form with credentials
  * @input sapId and password
  */
  submitBoarding() {
    if (this.registerForm.valid) {
      const postObj = {
        userName: this.registerForm.value.username,
        email: this.registerForm.value.email,
        mobileNumber: this.registerForm.value.mobileNumber,
        designation: this.registerForm.value.designation,
        role: this.registerForm.value.role
      };
      // tslint:disable-next-line: deprecation
      this.httpService.onBoarding(postObj).subscribe(user => {
        this.loader = false;
        this.router.navigate(['/login']);
      }, error => {
        this.loader = false;
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
  /*
    * @param create form
    * Create form group object for login form
    */
  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      designation: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.createForm();
    // tslint:disable-next-line: max-line-length
    this.elementRef.nativeElement.ownerDocument.body.style.background = 'url(\'https://mobirise.com/extensions/strategyamp/assets/images/mbr-1.jpg\') no-repeat center center fixed';
  }

}
