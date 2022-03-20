import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  // templateUrl: './hello-world.component.html',
  template: `
    <p>
      hello-world works
    </p>
  `,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
