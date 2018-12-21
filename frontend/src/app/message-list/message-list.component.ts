import { Component, OnInit } from '@angular/core';
import { Message } from '../entities/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  data: Message[] = [];

  constructor(private messageService:MessageService) {
  }

  async ngOnInit() {
    this.data = await this.messageService.getMessages();
  }

}
