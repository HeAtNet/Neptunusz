import { Component, OnInit, Input } from '@angular/core';
import { Exam } from '../entities/exam';
import {Router} from "@angular/router"

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

    constructor(private router: Router) { }

    @Input() content;
    @Input() opened;
    isOpened: boolean = false;

  ngOnInit() {
    this.isOpened = typeof this.opened != 'undefined';
  }

  open(){
    //window.location("./"+this.content.id);
    this.router.navigate(['/exam', this.content.id])
  }

}
