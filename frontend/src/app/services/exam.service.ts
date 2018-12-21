import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { guestHttpOptions } from "./auth.service";
import { httpOptions } from "./auth.service";
import { Exam } from "../entities/exam";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private examUrl = 'http://localhost:8080/exams';
    constructor(private http: HttpClient) { }

    getExams(): Promise<Exam[]> {
      return this.http.get<Exam[]>(
        this.examUrl,
        httpOptions
      ).toPromise();
    }

    getExam(id: number): Promise<Exam> {
      return this.http.get<Exam>(
        `${this.examUrl}/${id}`,
        httpOptions
      ).toPromise();
    }

    modifyExam(id: number, exam: Exam):Promise<Exam> {
      return this.http.put<Exam>(
        `${this.examUrl}/${id}`,
        exam,
        httpOptions
      ).toPromise();
    }

    addExam(exam: Exam): Promise<Exam> {
      return this.http.post<Exam>(
        this.examUrl,
        exam,
        httpOptions
      ).toPromise();
    }

    deleteExam(id:number){
      return this.http.delete<Exam>(
        `${this.examUrl}/${id}`,
        httpOptions
      ).toPromise();
    }
}
