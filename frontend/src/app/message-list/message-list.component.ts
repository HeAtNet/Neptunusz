import { Component, OnInit } from '@angular/core';
import { Message } from '../entities/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  data: Message[] = [];

  constructor() {
    this.data.push({id: 10, msgTime: "0 2019.01.01.", text: "0 text", title: "0 title"});
    this.data.push({id: 11, msgTime: "1 2019.01.01.", text: "1 text", title: "1 title"});
    this.data.push({id: 12, msgTime: "2 2019.01.01.", text: "2 text", title: "2 title"});
    this.data.push({id: 13, msgTime: "3 2019.01.01.", text: "3 text", title: "3 title"});
    this.data.push({id: 14, msgTime: "4 2019.01.01.", text: "4 text", title: "4 title"});
  }

  ngOnInit() {
  }

}
