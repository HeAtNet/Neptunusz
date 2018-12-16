package hu.elte.Neptunusz.controllers;

import hu.elte.Neptunusz.entities.Exam;
import hu.elte.Neptunusz.entities.Message;
import hu.elte.Neptunusz.entities.Subject;
import hu.elte.Neptunusz.entities.User;
import hu.elte.Neptunusz.repositories.ExamRepository;
import hu.elte.Neptunusz.repositories.MessageRepository;
import hu.elte.Neptunusz.repositories.SubjectRepository;
import hu.elte.Neptunusz.repositories.UserRepository;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private MessageRepository messageRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<User> post(@RequestBody User user) {
    	User savedIssue = userRepository.save(user);
        return ResponseEntity.ok(savedIssue);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> put(@RequestBody User user, @PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            user.setId(id);
            return ResponseEntity.ok(userRepository.save(user));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}/exams")
    public ResponseEntity<Iterable<Exam>> exams
        (@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            return ResponseEntity.ok(oUser.get().getExams());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/addExam")
    public ResponseEntity<Exam> insertExam
        (@PathVariable Integer id, 
         @RequestBody Exam exam) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            Exam newExam = examRepository.save(exam);
            user.getExams().add(newExam);
            userRepository.save(user);
            return ResponseEntity.ok(newExam);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/removeExam")
    public ResponseEntity<Exam> removeExam
        (@PathVariable Integer id, 
         @RequestBody Exam exam) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            user.getExams().remove(exam);
            userRepository.save(user);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}/subjects")
    public ResponseEntity<Iterable<Subject>> subjects
        (@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            return ResponseEntity.ok(oUser.get().getSubjects());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/addSubject")
    public ResponseEntity<Subject> insertSubject
        (@PathVariable Integer id, 
         @RequestBody Subject subject) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            Subject newSubject = subjectRepository.save(subject);
            user.getSubjects().add(newSubject);
            userRepository.save(user);
            return ResponseEntity.ok(newSubject);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/removeSubject")
    public ResponseEntity<Subject> removeSubject
        (@PathVariable Integer id, 
         @RequestBody Subject subject) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            user.getSubjects().remove(subject);
            userRepository.save(user);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}/inbox")
    public ResponseEntity<Iterable<Message>> inbox
            (@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get().getInbox());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @PostMapping("/{id}/getMessage")
    public ResponseEntity<Message> getMessage
            (@PathVariable Integer id,
             @RequestBody Message message) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            message.setAdresse(user);
            return ResponseEntity.ok(
                messageRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    @GetMapping("/{id}/sent")
    public ResponseEntity<Iterable<Message>> sent
            (@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get().getSent());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @PostMapping("/{id}/sendMessage")
    public ResponseEntity<Message> sendMessage
            (@PathVariable Integer id,
             @RequestBody Message message) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            User user = oUser.get();
            message.setSender(user);
            return ResponseEntity.ok(
                messageRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @Secured({"ROLE_TEACHER"})
    @DeleteMapping("/{id}")
    public ResponseEntity<User> delete(@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (oUser.isPresent()) {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    
}
