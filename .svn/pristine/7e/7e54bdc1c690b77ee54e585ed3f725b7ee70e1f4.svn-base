//Put back later after everything is working

//package hello.controllers;
//
//import hello.Application;
//import hello.models.*;
//import hello.repositories.*;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.BeforeClass;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.mock.web.MockHttpServletRequest;
//import org.springframework.test.annotation.DirtiesContext;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
//import org.springframework.web.context.WebApplicationContext;
//import org.springframework.web.util.NestedServletException;
//
//import javax.servlet.ServletContext;
//import javax.servlet.http.HttpSession;
//import java.nio.charset.Charset;
//import java.util.ArrayList;
//import java.util.Iterator;
//
//import static org.hamcrest.Matchers.is;
//import static org.junit.Assert.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = Application.class)
//@WebAppConfiguration
//@DirtiesContext
//public class AuthenticationControllerTest {
//
//
//    private final MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
//            MediaType.APPLICATION_JSON.getSubtype(),
//            Charset.forName("utf8"));
//
//    private MockMvc mockMvc;
//
//    private Assessment assessment;
//
//    private Question question;
//
//    private User mockUser;
//    private UserSession mockUserSession;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;
//
//    @Autowired
//    private UserSessionRepository userSessionRepository;
//
//    @Autowired
//    private AssessmentRepository assessmentRepository;
//
//    @Autowired
//    private QuestionRepository questionRepository;
//
//    @Autowired
//    private WebApplicationContext webApplicationContext;
//
//
//
//    @Before
//    public void setUp() {
//        this.mockMvc = webAppContextSetup(webApplicationContext).build();
//        userSessionRepository.deleteAll();
//
//    }
//    public void login() throws Exception
//    {
//        HttpSession sesssion= mockMvc.perform(post("/login")
//                .contentType(contentType)
//                .content(createLoginJson("user1","user1_pass")))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(contentType))
//                .andReturn()
//                .getRequest()
//                .getSession();
//
//        UserSession sessionFromSession=(UserSession)sesssion.getAttribute("SessionID");
//        assertNotNull(sessionFromSession);
//
//        UserSession getUserSessionSaved=userSessionRepository.findOne(sessionFromSession.getSessionID());
//        assertNotNull(getUserSessionSaved);
//
//        User linked=getUserSessionSaved.getLinkedUser();
//        assertNotNull(linked);
//
//        linked=userRepository.findOne(linked.getUsername());
//        assertNotNull(linked);
//    }
//    public void isLoggedIn() throws Exception
//    {
//        mockMvc.perform(post("/is-logged-in"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(contentType))
//                .andExpect(jsonPath("$.success",is("false")));
//        this.login();
//        mockMvc.perform(post("/is-logged-in"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(contentType))
//                .andExpect(jsonPath("$.success",is("true")));
//    }
//
//    private static String createLoginJson (String userName, String password){
//        return "{\n" +
//                "  \"username\":\""+userName+"\",\n" +
//                "  \"password\":\""+password+"\"\n" +
//                "}";
//    }
//}
