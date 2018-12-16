import { Message } from './message';
import { Exam } from './exam';
import { Subject } from './subject';
/*export class User {
    id: number = 0;
    username: string = '';
    name: string = '';
    mail: string = '';
    pass: string = '';
    //start_date: LocalDateTime = ;
    status: string = '';
    role: string = '';
    inbox = [];
    sent = [];
    exams = [];
    subjects = [];
    is_del: boolean = false;
}
*/
export class User {
  id: number = -1;
  username: string = "";
  name: string = "";
  mail: string = "";
  pass: string = "";
  start_date: string = "";
  status: string = "";
  role: string = "";
  inbox: Message[] = [];
  sent: Message[] = [];
  exams: Exam[] = [];
  subjects: Subject[] = [];
  is_del: boolean = false;
}
