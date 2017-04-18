package hello.repositories.exceptions;

public class TargetGroupNotFoundException extends Exception {

    public TargetGroupNotFoundException(Integer targetGroupId) {
        super("Could not find target group of ID: " + targetGroupId);
    }
}
