package hu.elte.Neptunusz.repositories;

import hu.elte.Neptunusz.entities.Exam;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends CrudRepository<Exam, Integer> {

}
