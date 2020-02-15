import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpService } from "../../services/http.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public httpService: HttpService
  ) {}

  checkApplication() {}
  ngOnInit() {}
}
