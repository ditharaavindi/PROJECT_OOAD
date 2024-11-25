package backend.exception;

public class EmployeNotFoundException extends RuntimeException{
    public EmployeNotFoundException(Long id) {
        super("Could not find customer with id " + id);
    }

    public EmployeNotFoundException(String message) {
        super(message);  // pass the error message to the parent constructor
    }
}
