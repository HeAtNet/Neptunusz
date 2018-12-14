import { Component, OnInit } from '@angular/core';
import { Exam } from '../entities/exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  data: Exam[] = [];

  constructor() {
    this.data.push({id: 0,examStart: 'examStart0',examEnd: 'examEnd0',classroom: 'classroom0',type: 'type0',is_del: false});
    this.data.push({id: 0,examStart: 'examStart1',examEnd: 'examEnd1',classroom: 'classroom1',type: 'type1',is_del: false});
    this.data.push({id: 0,examStart: 'examStart2',examEnd: 'examEnd2',classroom: 'classroom2',type: 'type2',is_del: false});
    this.data.push({id: 0,examStart: 'examStart3',examEnd: 'examEnd3',classroom: 'classroom3',type: 'type3',is_del: false});
    this.data.push({id: 0,examStart: 'examStart4',examEnd: 'examEnd4',classroom: 'classroom4',type: 'type4',is_del: false});
    this.data.push({id: 0,examStart: 'examStart5',examEnd: 'examEnd5',classroom: 'classroom5',type: 'type5',is_del: false});
  }

  ngOnInit() {
  }

}
