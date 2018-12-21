import { Component, OnInit } from '@angular/core';
import { Subject } from '../entities/subject';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.css']
})
export class SubjectViewComponent implements OnInit {
  data: Subject = new Subject();

  constructor(
    private subjectService:SubjectService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.data = await this.subjectService.getSubject(parseInt(id, 10));
  }

}
