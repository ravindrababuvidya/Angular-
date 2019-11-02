import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoList = [];
  // todo={
  //   id:1,
  //   description:"Learn Angular"
  // }
  // todoList =[
  //   {id:1,description:"Learn Angular"},
  //   {id:2,description:"Learn Bootstarp"},
  //   {id:3,description:"Learn Microservices"},
  //   {id:4,description:"Learn Flutter"},
  //   {id:5,description:"Learn Spring Boot"},
  //   {id:6,description:"Learn Happpy"},
  // ]

  constructor() { }

  ngOnInit() {
    this.todoList =[
      new Todos(1,"Learn Angular" ,false,new Date()),
      new Todos(2,"Learn Bootstarp" ,false,new Date()),
      new Todos(3,"Learn Microservices" ,false,new Date()),
      new Todos(4,"Learn Flutter" ,false,new Date()),
      new Todos(5,"Learn Spring Boot" ,false,new Date()),
      new Todos(6,"Learn Happpy" ,true,new Date())
    ]
  }

}

export class Todos {
  constructor(
    public id : number,
    public description:string,
    public status : boolean,
    public targatedDate: Date
  ){
    
  }
}