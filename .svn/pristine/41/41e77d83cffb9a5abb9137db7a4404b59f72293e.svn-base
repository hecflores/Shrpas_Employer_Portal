package hello.controllers;

import hello.helpers.HibernateUtil;
import hello.models.LoginRequest;
import hello.models.LoginResults;
import hello.models.User;
import hello.models.UserSession;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sun.rmi.runtime.Log;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.CookieManager;
import java.util.Date;
import java.util.List;

/**
 * Created by Hector on 1/28/2017.
 */
@Controller
@RequestMapping("api")
public class AdministratorController {


    @RequestMapping(value = "login", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody LoginResults login(@CookieValue(name = "SessionID",defaultValue = "NONE") String SessionID, @Valid @RequestBody LoginRequest user, BindingResult bindingResult, HttpServletResponse response) {
        if(bindingResult.hasErrors()){
            return LoginResults.Failed(new Exception("Binding Had Errors"));
        }

        /*******************************************************************/
        if(user.getUserID()==null || user.getPassword()==null || user.getRoleID()==null){
            return LoginResults.Failed(new Exception("Some Perameters where not found(UserID("+
                    user.getUserID()+"), Password("+user.getPassword()+"), Role("+user.getRoleID()+")"));
        }

        /*******************************************************************/
        Session sessionOne = HibernateUtil.getSessionFactory().openSession();

        /*******************************************************************/
        List<User> users=sessionOne.createQuery("from hello.models.User where UserID = :userID and Password = :Password and Role_RoleId = :Role")
                .setParameter("userID",user.getUserID())
                .setParameter("Password",user.getPassword())
                .setParameter("Role",user.getRoleID())
                .list();

        if(users.size()!=1){
            return LoginResults.Failed(new Exception("Unable to find the User name and password given"));
        }

        /*******************************************************************/
        UserSession userSession=new UserSession();
        userSession.setLinkedUser(users.get(0));
        sessionOne.save(userSession);
        sessionOne.flush();
        sessionOne.close();

        /*******************************************************************/
        Cookie sessionCookie=new Cookie("SessionID",userSession.getSessionID());
        sessionCookie.setMaxAge(1*60*60*12); //12 Hours
        response.addCookie(sessionCookie);

        /*******************************************************************/
        return LoginResults.Passed(userSession);
    }


}
