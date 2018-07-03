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
  repositories: any;

  searchType = true;

  errorMsg: string;

  constructor(
    private _dS: DataService
  ) { }

  ngOnInit() {
  }

  switchToUserSearch() {
    this.searchType = true;
  }

  switchToRepoSearch() {
    this.searchType = false;
  }

  initSearch(searchWord) {
    this.getData(searchWord); // &sort=stars&order=desc
  }

  
  getData(arg) {
    if (this.searchType && arg.length > 2) {
      this._dS.getData(`users/${arg}`).subscribe(data => {
        console.log(data);
        this.singleUser = data;
        this.users = null;
        this.errorMsg = '';
      }, error => {
        this.errorMsg = `'${arg}' was not found`;
        console.log(error.message);
      });
    } else if (!this.searchType && arg.length > 2) {
      this._dS.getData(`search/repositories?q=${arg}`).subscribe(data => {
        console.log(data);
        this.users = data['items'];
        this.singleUser = null;
        this.errorMsg = '';
      }, error => {
        this.errorMsg = `'${arg}' was not found`;
        console.log(error.message);
      });
    } else {
      this.errorMsg = 'Minimum 3 letters';
    }
  }
  
  getRepos(url) {
    this._dS.getData(url).subscribe(data => {
      this.repositories = data;
      console.log(this.repositories);
    });
  }

  closeModal(modalWindow) {
    if (event.target == modalWindow) {
      this.repositories = null;
    }
  }
}
