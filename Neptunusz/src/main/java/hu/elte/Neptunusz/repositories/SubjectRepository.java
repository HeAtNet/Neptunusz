package hu.elte.Neptunusz.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.Neptunusz.entities.Subject;

@Repository
public interface SubjectRepository extends CrudRepository<Subject, Integer> {

}
