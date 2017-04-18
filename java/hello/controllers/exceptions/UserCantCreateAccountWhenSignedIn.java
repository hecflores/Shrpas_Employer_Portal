package hello.controllers.exceptions;

import hello.models.User;

/**
 * Created by Hector on 4/16/2017.
 */
public class UserCantCreateAccountWhenSignedIn  extends RuntimeException {
    public UserCantCreateAccountWhenSignedIn(){
        super("User not allowed to create user acount while signed in");
    }
}
