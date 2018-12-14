import { Component, OnInit } from '@angular/core';
import { Exam } from '../entities/exam';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.css']
})
export class ExamViewComponent implements OnInit {
  data: Exam = new Exam();

  constructor() {
    this.data={id: 0,examStart: 'examStart0',examEnd: 'examEnd0',classroom: 'classroom0',type: 'type0',is_del: false};
  }

  ngOnInit() {
  }

}
