package hu.elte.Neptunusz.repositories;

import hu.elte.Neptunusz.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    
}