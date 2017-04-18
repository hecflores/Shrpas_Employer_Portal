package hello.repositories.exceptions;

/**
 * Created by Hector on 4/3/2017.
 */
public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String userid){
        super("User not found of ID: " + userid);
    }
    public UserNotFoundException(String userid, String extra){
        super("User not found of ID: " + userid+"\n"+extra);
    }
}
