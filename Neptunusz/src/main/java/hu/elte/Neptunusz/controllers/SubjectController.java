package hu.elte.Neptunusz.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.Neptunusz.entities.Subject;
import hu.elte.Neptunusz.repositories.SubjectRepository;


@RestController
@RequestMapping("/subjects")
public class SubjectController {
	
	@Autowired
	private SubjectRepository subjectRepository;
	
	@GetMapping("")
    public ResponseEntity<Iterable<Subject>> getAll() {
        return ResponseEntity.ok(subjectRepository.findAll());
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<Subject> get(@PathVariable Integer id) {
        Optional<Subject> subject = subjectRepository.findById(id);
        if (subject.isPresent()) {
            return ResponseEntity.ok(subject.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@Secured({"ROLE_TEACHER"})
	@PostMapping("")
    public ResponseEntity<Subject> post(@RequestBody Subject subject) {
        Subject savedSubject = subjectRepository.save(subject);
        return ResponseEntity.ok(savedSubject);
    }
	
	@Secured({"ROLE_TEACHER"})
	@PutMapping("/{id}")
	public ResponseEntity<Subject> update
	         (@PathVariable Integer id,
	           @RequestBody Subject subject) {
	        Optional<Subject> oSubject = subjectRepository.findById(id);
	        if (oSubject.isPresent()) {
	            subject.setId(id);
	            return ResponseEntity.ok(subjectRepository.save(subject));
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	}
	 
	 @Secured({"ROLE_TEACHER"})
	 @DeleteMapping("/{id}")
	 public ResponseEntity<Subject> delete
	        (@PathVariable Integer id) {
	        Optional<Subject> oSubject= subjectRepository.findById(id);
	        if (oSubject.isPresent()) {
	            subjectRepository.deleteById(id);
	            return ResponseEntity.ok().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
    }

}
