insert into user (id, username, name, mail, pass, start_date, status, role, is_del) values (1, 'ASD123', 'name0', 'mail0', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', CURRENT_TIMESTAMP(), 'ACTIVE', 'ROLE_STUDENT', false);
insert into user (id, username, name, mail, pass, start_date, status, role, is_del) values (2, 'SDF234', 'name1', 'mail1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', CURRENT_TIMESTAMP(), 'ACTIVE', 'ROLE_STUDENT', false);
insert into user (id, username, name, mail, pass, start_date, status, role, is_del) values (3, 'DFG345', 'name2', 'mail2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', CURRENT_TIMESTAMP(), 'ACTIVE', 'ROLE_STUDENT', false);

insert into subject (name,start_of_lesson,end_of_lesson,classroom,type,is_del) values ('Analízis','16:15','17:45',821,'PRACTICE',false);

insert into exam (start_of_exam,end_of_exam,classroom,type,is_del, subject_id) values ('8:00','11:00','0-822- Bólyai', 'ORAL',false,1);

insert into message (title,text,sender_id,adresse_id,time_of_message) values ('Óra elmaradás','Kedves hallgatók! A mai gyakorlat elmarad',1,2,CURRENT_TIMESTAMP());
