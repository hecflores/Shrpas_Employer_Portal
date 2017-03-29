package hello.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class HomeController {
    @RequestMapping(value = "/app/*")
    public String index() {
        return "app";
    }

    @RequestMapping(value = "/app/*/*")
    public String index2() {
        return "app";
    }
    @RequestMapping(value = "/app/*/*/*")
    public String index3() {
        return "app";
    }
    @RequestMapping(value = "")
    public String home() {
        return "app";
    }
}
