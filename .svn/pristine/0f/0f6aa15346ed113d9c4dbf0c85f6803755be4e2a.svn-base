package hello.repositories.exceptions;

/**
 * Created by Hector on 4/3/2017.
 */
public class NotAuthorizedException extends RuntimeException {
    public NotAuthorizedException() {
        this("User Was not found");
    }

    public NotAuthorizedException(String reason){
        super("User was not authorized because "+reason);
    }
}