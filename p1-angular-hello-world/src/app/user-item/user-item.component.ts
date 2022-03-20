import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input("user-name")
  name: string;

  constructor() {
    this.name = "Elroy Kanye"
  }

  ngOnInit(): void {
  }

}
