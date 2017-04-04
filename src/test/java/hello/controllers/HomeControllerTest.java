 package hello.controllers;

 import org.junit.Before;
 import org.junit.Test;
 import org.junit.runner.RunWith;
 import org.mockito.InjectMocks;
 import org.mockito.MockitoAnnotations;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
 import org.springframework.boot.test.context.SpringBootTest;
 import org.springframework.test.annotation.DirtiesContext;
 import org.springframework.test.context.junit4.SpringRunner;
 import org.springframework.test.web.servlet.MockMvc;
 import org.springframework.test.web.servlet.setup.MockMvcBuilders;

 import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
 import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

 @RunWith(SpringRunner.class)
 @AutoConfigureMockMvc
 @SpringBootTest
 @DirtiesContext
 public class HomeControllerTest {

     @Autowired
     private MockMvc mvc;

     @InjectMocks
     private HomeController homeController;

     @Before
     public void setUp() {
         MockitoAnnotations.initMocks(this);
         mvc = MockMvcBuilders.standaloneSetup(homeController).build();
     }
    // @Test
    //  public void shouldReturnApponGetAssessment() throws Exception{
    //     mvc.perform(get("/app/assessments/create"))
    //             .andExpect(status().isOk())
    //             .andExpect(view().name("app"));
                
    // }
    //  @Test
    //  public void shouldReturnAppOnAddAssessment() throws Exception{
    //     mvc.perform(get("/app/assessments/"))
    //             .andExpect(status().isOk())
    //             .andExpect(view().name("app"));
    //  }
     @Test
     public void shouldReturnApp() throws Exception {
         mvc.perform(get("/"))
                 .andExpect(status().isOk())
                 .andExpect(view().name("app"));
     }

 }