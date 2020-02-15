import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userDetails: UserDetails[];
  constructor() { }

  ngOnInit() {
    this.userDetails = [
      {
        userName: 'jeyakumar',
        mobileNumber: '994436644',
        email: 'rsjayakumar@live.com',
        designation: 'Software Engineer',
        role: 'admin',
        status: 'pending'
      },
      {
        userName: 'Rabeek',
        mobileNumber: '9444336644',
        email: 'rabeek@live.com',
        designation: 'Software Engineer',
        role: 'admin',
        status: 'Approved'
      }
    ];
  }

}
