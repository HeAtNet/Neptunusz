import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { guestHttpOptions } from "./auth.service";
import { httpOptions } from "./auth.service";
import { Message } from "../entities/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageUrl = 'http://localhost:8080/message';
    constructor(private http: HttpClient) { }

    getMessages(): Promise<Message[]> {
      return this.http.get<Message[]>(
        this.messageUrl,
        guestHttpOptions
      ).toPromise();
    }

    getMessage(id: number): Promise<Message> {
      return this.http.get<Message>(
        `${this.messageUrl}/${id}`,
        guestHttpOptions
      ).toPromise();
    }

    modifyMessage(id: number, message: Message):Promise<Message> {
      return this.http.put<Message>(
        `${this.messageUrl}/${id}`,
        message,
        httpOptions
      ).toPromise();
    }

    addMessage(message: Message): Promise<Message> {
      return this.http.post<Message>(
        this.messageUrl,
        message,
        httpOptions
      ).toPromise();
    }

    deleteMessage(id:number){
      return this.http.delete<Message>(
        `${this.messageUrl}/${id}`,
        httpOptions
      ).toPromise();
    }
}
