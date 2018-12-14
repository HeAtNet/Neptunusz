import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../entities/subject';
import {Router} from "@angular/router"

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

    constructor(private router: Router) { }

    @Input() content;
    @Input() opened;
    isOpened: boolean = false;

  ngOnInit() {
    this.isOpened = typeof this.opened != 'undefined';
  }

  open(){
    //window.location("./"+this.content.id);
    this.router.navigate(['/subject', this.content.id])
  }

}
