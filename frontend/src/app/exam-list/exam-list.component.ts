import { Component, OnInit } from '@angular/core';
import { Exam } from '../entities/exam';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  data: Exam[] = [];

  constructor(private examService:ExamService) {
  }

  async ngOnInit() {
    this.data = await this.examService.getExams();
  }

}
