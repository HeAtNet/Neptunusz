import { Component, OnInit } from '@angular/core';
import { Subject } from '../entities/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  data: Subject[] = [];

  constructor() {
    this.data.push({id: 0,name: 'name0',lessonStart: 'lessonStart0',lessonEnd: 'lessonEnd0',classroom: 'classroom0',type: 'type0',is_del: false});
    this.data.push({id: 0,name: 'name1',lessonStart: 'lessonStart1',lessonEnd: 'lessonEnd1',classroom: 'classroom1',type: 'type1',is_del: false});
    this.data.push({id: 0,name: 'name2',lessonStart: 'lessonStart2',lessonEnd: 'lessonEnd2',classroom: 'classroom2',type: 'type2',is_del: false});
    this.data.push({id: 0,name: 'name3',lessonStart: 'lessonStart3',lessonEnd: 'lessonEnd3',classroom: 'classroom3',type: 'type3',is_del: false});
    this.data.push({id: 0,name: 'name4',lessonStart: 'lessonStart4',lessonEnd: 'lessonEnd4',classroom: 'classroom4',type: 'type4',is_del: false});
  }

  ngOnInit() {
  }

}
