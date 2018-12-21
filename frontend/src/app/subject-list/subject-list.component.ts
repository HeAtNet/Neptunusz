import { Component, OnInit } from '@angular/core';
import { Subject } from '../entities/subject';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  data: Subject[] = [];

  constructor(private subjectService:SubjectService) {
  }

  async ngOnInit() {
    this.data = await this.subjectService.getSubjects();
  }

}
