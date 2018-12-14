import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../entities/message';
import {Router} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    constructor(private router: Router) { }

    @Input() content;
    @Input() opened;
    isOpened: boolean = false;

  ngOnInit() {
    this.isOpened = typeof this.opened != 'undefined';
  }

  open(){
    //window.location("./"+this.content.id);
    this.router.navigate(['/message', this.content.id])
  }

}
