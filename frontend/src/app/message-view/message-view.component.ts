import { Component, OnInit } from '@angular/core';
import { Message } from '../entities/message';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  data: Message = new Message();

  constructor() {
    this.data={id: 10, msgTime: "0 2019.01.01.", text: "0 text", title: "0 title"};
  }

  ngOnInit() {
  }

}
