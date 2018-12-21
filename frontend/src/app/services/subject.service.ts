import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { guestHttpOptions } from "./auth.service";
import { httpOptions } from "./auth.service";
import { Subject } from "../entities/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjectUrl = 'http://localhost:8080/subjects';
    constructor(private http: HttpClient) { }

    getSubjects(): Promise<Subject[]> {
      return this.http.get<Subject[]>(
        this.subjectUrl,
        httpOptions
      ).toPromise();
    }

    getSubject(id: number): Promise<Subject> {
      return this.http.get<Subject>(
        `${this.subjectUrl}/${id}`,
        httpOptions
      ).toPromise();
    }

    modifySubject(id: number, subject: Subject):Promise<Subject> {
      return this.http.put<Subject>(
        `${this.subjectUrl}/${id}`,
        subject,
        httpOptions
      ).toPromise();
    }

    addSubject(subject: Subject): Promise<Subject> {
      return this.http.post<Subject>(
        this.subjectUrl,
        subject,
        httpOptions
      ).toPromise();
    }

    deleteSubject(id:number){
      return this.http.delete<Subject>(
        `${this.subjectUrl}/${id}`,
        httpOptions
      ).toPromise();
    }
}
