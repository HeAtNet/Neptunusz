import { Component, OnInit } from '@angular/core';
import { Message } from '../entities/message';
import { MessageService } from '../services/message.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  data: Message = new Message();

  constructor(
    private messageService:MessageService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.data = await this.messageService.getMessage(parseInt(id, 10));
  }

}
