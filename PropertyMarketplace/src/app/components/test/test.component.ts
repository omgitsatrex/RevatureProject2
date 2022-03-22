import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <h1>{{ message }}</h1>
  <button (click)="onClickHandler()">Click Me</button>
  <button (click)="onLogin()" >Login</button>
  <br>
  <input type="text" #myInput >
  <button (click)="onClick(myInput)" >Submit</button>
  <br>
  <br>
  <br>
  <textarea #myText (keyup)="onSend(myText)"></textarea>
  <!-- <button (click)="onSend(myText)">Send</button> -->
  <h2>{{ 140 - comment.length }}</h2>
 

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message = 'Hello Guest';

  constructor() { }

  public comment = '';

  ngOnInit(): void {
  }

  onLogin(){
    this.message = 'Hello Mark'
  }

  onClickHandler(){
    console.log('button clicked')
  }

  onSend(data: any){
    this.comment = data.value
  }

  onClick(input: any){
    console.log(input)
    console.log(input.type)
    console.log(input.value)
  }


}
