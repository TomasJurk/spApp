import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;
  singleUser: any;

  constructor(
    private _dS: DataService
  ) { }

  ngOnInit() {
  }

  getData() {
    this._dS.getData('users/TomasJurk').subscribe((data) => {
      console.log(data);
      if (data[0]) {
        this.users = data;
      } else {
        this.singleUser = data;
      }
    });
  }

}
