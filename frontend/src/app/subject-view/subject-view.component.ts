import { Component, OnInit } from '@angular/core';
import { Subject } from '../entities/subject';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.css']
})
export class SubjectViewComponent implements OnInit {
  data: Subject = new Subject();

  constructor() {
    this.data={id: 0,name: 'name0',lessonStart: 'lessonStart0',lessonEnd: 'lessonEnd0',classroom: 'classroom0',type: 'type0',is_del: false};
  }

  ngOnInit() {
  }

}
