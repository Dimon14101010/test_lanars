import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = [];
  todoItem = {
    id: 0,
    title: '',
    description: '',
    created_at: ''
  };
  idCounter = 0;
  sortedArray: Array<any>;
  itemsOnPage = 10;
  pages: number;
  pagesArray: Array<any> = [];
  startIndex = 0;
  lastIndex = 10;
  currerntPage;
  constructor () {
  }
  addTodo (title, description) {
    this.idCounter++;
    this.todoItem = {
      id: this.idCounter,
      title: title,
      description: description,
      created_at: new Date().toLocaleDateString()
    };
    this.todoList.push (this.todoItem);
    this.sortedArray = this.todoList;
    this.setPage();
    this.pagination(this.pages);
  }
  removeTodo (index) {
    this.sortedArray.splice(index, 1);
    this.setPage();
    this.pagination(this.pages);
  }
  sortByTitle (sortText) {
    if (sortText) {
      this.sortedArray = this.todoList.filter(function (sortArr) {
        if (sortText && sortArr.title.toLowerCase().indexOf(sortText.toLowerCase()) > -1) {
          return true;
        }
      });
    } else {
      this.sortedArray = this.todoList;
    }
    this.setPage();
    this.pagination(this.pages);
  }
  sortByDate (date) {
    if (date) {
      this.sortedArray = this.todoList.filter(function (sortArr) {
        if (sortArr.created_at === new Date(date).toLocaleDateString()) {
          return true;
        }
      });
    } else {
      this.sortedArray = this.todoList;
    }
    this.setPage();
    this.pagination(this.pages);
  }
  setPage () {
    this.pages = Math.ceil(this.sortedArray.length / this.itemsOnPage);
    this.pagesArray.length = this.pages;
  }
  pagination (page) {
    this.currerntPage = page;
    this.startIndex = this.itemsOnPage * (page - 1);
    this.lastIndex = this.itemsOnPage * page;
  }
}
