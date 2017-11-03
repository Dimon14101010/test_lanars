import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    date: 0
  };
  constructor (private http: HttpClient) {
    this.http.get("../assets/base.json")
      .subscribe((response: Array<any>) => this.todoList = response);
  }
  addTodo (title, description) {
    this.http.post("../assets/base.json" , {
      id: this.todoList.length + 1,
      title: title,
      description: description,
      date: Date.now()
    }).subscribe(res => console.log(res));
    console.log('works', title, description);
  }

}
