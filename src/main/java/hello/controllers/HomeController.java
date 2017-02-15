package hello.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Hector on 1/28/2017.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/*")
    public String index() {
        return "app";
    }
}
