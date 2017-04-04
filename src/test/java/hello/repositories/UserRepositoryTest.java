package hello.repositories;

import hello.models.Role;
import hello.models.User;
import hello.storage.StorageService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@DirtiesContext
public class UserRepositoryTest {
    //Just to test this
    @Autowired
    private UserRepository userRepository;

    @MockBean
    private StorageService storageService;

    @Test
    public void testUserRepository() {
        User user = new User();
        user.setUserID("1");
        user.setTitle("Admin");
        user.setOrganization("Organization");
        user.setEmail("admin@mail.com");
        user.setPassword("password");

        userRepository.save(user);

        assertEquals(1, userRepository.count());
        assertEquals(user.getUserID(), "1");
        assertEquals(user.getTitle(), "Admin");
        assertEquals(user.getOrganization(), "Organization");
        assertEquals(user.getEmail(), "admin@mail.com");
        assertEquals(user.getPassword(), "password");

    }

    @Test
    public void testUserRole() {
        User user = new User();
        user.setUserID("2");

        Role role = new Role("admin");
        user.setRole(role);

        assertEquals(user.getRole(), role);
    }


}