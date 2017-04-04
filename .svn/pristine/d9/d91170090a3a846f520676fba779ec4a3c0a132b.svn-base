package hello.repositories;

/**
 * Created by Hector on 1/28/2017.
 */
import hello.User;
import hello.models.Question;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@RepositoryRestResource(collectionResourceRel = "questions", path = "questions")
public interface QuestionRepository extends PagingAndSortingRepository<Question, Integer> {

}
