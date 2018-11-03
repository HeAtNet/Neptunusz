package hu.elte.Neptunusz.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.Neptunusz.entities.Message;


@Repository
public interface MessageRepository extends CrudRepository<Message, Long>{

}
