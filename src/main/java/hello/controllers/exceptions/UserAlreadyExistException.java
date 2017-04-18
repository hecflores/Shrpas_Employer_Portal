package hello.controllers.exceptions;

import hello.models.User;

/**
 * Created by mjdicken on 3/21/17.
 */
public class UserAlreadyExistException extends RuntimeException {
    public UserAlreadyExistException(User user){
        super("User "+user.getUsername()+" already exists");
    }
}
