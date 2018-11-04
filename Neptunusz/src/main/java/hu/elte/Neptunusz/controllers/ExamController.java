package hu.elte.Neptunusz.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.Neptunusz.entities.Exam;
import hu.elte.Neptunusz.repositories.ExamRepository;

@RestController
@RequestMapping("/exams")
public class ExamController {
	 @Autowired
	    private ExamRepository examRepository;
	    
	    @GetMapping("")
	    public ResponseEntity<Iterable<Exam>> getAll() {
	        return ResponseEntity.ok(examRepository.findAll());
	    }
	    
	    @GetMapping("/{id}")
	    public ResponseEntity<Exam> get(@PathVariable Integer id) {
	        Optional<Exam> exam = examRepository.findById(id);
	        if (exam.isPresent()) {
	            return ResponseEntity.ok(exam.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
	    @PostMapping("")
	    public ResponseEntity<Exam> post(@RequestBody Exam exam) {
	        Exam savedExam = examRepository.save(exam);
	        return ResponseEntity.ok(savedExam);
	    }
	    
	    @PutMapping("/{id}")
	    public ResponseEntity<Exam> update
	            (@PathVariable Integer id,
	             @RequestBody Exam exam) {
	        Optional<Exam> oExam = examRepository.findById(id);
	        if (oExam.isPresent()) {
	            exam.setId(id);
	            return ResponseEntity.ok(examRepository.save(exam));
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	            
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Exam> delete
	            (@PathVariable Integer id) {
	        Optional<Exam> oExam = examRepository.findById(id);
	        if (oExam.isPresent()) {
	            examRepository.deleteById(id);
	            return ResponseEntity.ok().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
}
