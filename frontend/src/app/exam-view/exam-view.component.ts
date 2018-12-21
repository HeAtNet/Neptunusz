import { Component, OnInit } from '@angular/core';
import { Exam } from '../entities/exam';
import { ExamService } from '../services/exam.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.css']
})
export class ExamViewComponent implements OnInit {
  data: Exam = new Exam();

  constructor(
    private examService:ExamService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.data = await this.examService.getExam(parseInt(id,2));
  }

}
