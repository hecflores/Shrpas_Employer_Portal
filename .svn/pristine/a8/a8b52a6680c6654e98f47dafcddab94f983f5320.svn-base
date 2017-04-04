package hello.models;

/**
 * Created by Hector on 1/28/2017.
 */

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;


@Entity // This tells Hibernate to make a table out of this class
public class UserSession {


    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy= GenerationType.AUTO,generator = "uuid2")
    @Column(columnDefinition = "CHAR(40)")
    private String SessionID;

    @OneToOne
    private User LinkedUser;

    /***********************************************************************/
    public String getSessionID() {
        return SessionID;
    }
    public void setSessionID(String SessionID) {
        this.SessionID = SessionID;
    }

    /***********************************************************************/
    public User getLinkedUser() {
        return LinkedUser;
    }
    public void setLinkedUser(User LinkedUser) {
        this.LinkedUser = LinkedUser;
    }

    /***********************************************************************/

}