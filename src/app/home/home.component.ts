import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reposFound: any;
  singleUser: any;
  singleRepository: any;
  repositories: any;

  searchType = true;

  searchCriteria = '';

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

  setSortType(type) {
    this.searchCriteria = type;
  }

  // Get data from github main function (single user data or searched repos)
  getData(arg) {
    if (this.searchType && arg.length > 2) {
      this._dS.getData(`users/${arg}`).subscribe(data => {
        console.log(data);
        this.singleUser = data;
        this.reposFound = null;
        this.errorMsg = '';
      }, error => {
        this.errorMsg = `'${arg}' was not found`;
        console.log(error.message);
      });
    } else if (!this.searchType && arg.length > 2) {
      console.log(arg, this.searchCriteria);
      this._dS.getData(`search/repositories?q=${arg}${this.searchCriteria}`).subscribe(data => {
        console.log(data);
        this.reposFound = data['items'];
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

  // Get user's repositories list
  getRepos(url) {
    this._dS.getData(url).subscribe(data => {
      this.repositories = data;
    }, error => {
      console.log(error.message);
    });
  }

  // Get single repository's data
  getSingleRep(url) {
    this._dS.getData(url).subscribe(data => {
      this.singleRepository = data;
    }, error => {
      console.log(error.message);
    });
  }

  closeModal(modalWindow) {
    if (event.target === modalWindow) {
      this.repositories = null;
      this.singleRepository = null;
    }
  }
}
