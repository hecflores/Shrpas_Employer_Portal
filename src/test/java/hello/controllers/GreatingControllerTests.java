package hello.controllers;

import org.mockito.InjectMocks;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import org.mockito.MockitoAnnotations;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.is;

import org.springframework.web.servlet.view.InternalResourceViewResolver;


/**
 * Unit tests for {@link GreetingController}.
 * @author Hector Flores
 */

public class GreatingControllerTests{

    @InjectMocks
    private GreetingController greetingController;

    @Rule
    public ExpectedException thrown = ExpectedException.none();
    private MockMvc mockMvc;

    @Before
    public void setup() {

        InternalResourceViewResolver viewResolver=new InternalResourceViewResolver();
        viewResolver.setPrefix("/main/resources/templates/");
        viewResolver.setSuffix(".html");
        // this must be called for the @Mock annotations above to be processed
        // and for the mock service to be injected into the controller under
        // test.
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(greetingController)
                .setViewResolvers(viewResolver)
                .build();
    }

    @Test
    public void testGreeting() throws Exception
    {

        int userId = 3;

        mockMvc.perform(
                get("/greeting"))
                .andDo(print())
                .andExpect(MockMvcResultMatchers.status().isOk());


    }
}
