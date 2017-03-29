//package hello.models;
//
///**
// * Created by Hector on 1/28/2017.
// */
//
//import org.hibernate.annotations.GenericGenerator;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//import java.util.Date;
//
//
//public class LoginResults {
//
//    private boolean Passed;
//    private String Error;
//    private UserSession Session;
//
//    /***********************************************************************/
//    public LoginResults(boolean PassedOrFailed, Exception e, UserSession session)
//    {
//
//        this.Passed=PassedOrFailed;
//        this.Error=(e!=null)?e.getMessage():null;
//        this.Session=session;
//    }
//
//    /***********************************************************************/
//    public boolean isPassed() {
//        return Passed;
//    }
//    public void setPassed(boolean passed) {
//        Passed = passed;
//    }
//
//    /***********************************************************************/
//    public String getError() {
//        return Error;
//    }
//    public void setError(String error) {
//        Error = error;
//    }
//
//    /***********************************************************************/
//    public UserSession getSession() {
//        return Session;
//    }
//    public void setSession(UserSession session) {
//        Session = session;
//    }
//
//    /***********************************************************************/
//    /***********************************************************************/
//    /***********************************************************************/
//    /***********************************************************************/
//    public static LoginResults Failed(Exception e){
//        return new LoginResults(false,e,null);
//    }
//
//    /***********************************************************************/
//    public static LoginResults Passed(UserSession session){
//        return new LoginResults(true,null,session);
//    }
//
//
//}