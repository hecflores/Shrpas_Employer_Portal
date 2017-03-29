package hello.models;

import javax.persistence.*;

@Entity(name = "User")
@Table(name = "User")
public class User {


    /***********************************************************************/
    @Id
    private String UserID;
    private String Title;
    private String Organization;
    private String Password;
    private String Email;

    @ManyToOne
    private Role Role;

    public User() {
    }

    /***********************************************************************/
    public String getUserID() {
        return UserID;
    }

    public void setUserID(String userID) {
        UserID = userID;
    }

    /***********************************************************************/
    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    /***********************************************************************/
    public String getOrganization() {
        return Organization;
    }

    public void setOrganization(String organization) {
        Organization = organization;
    }

    /***********************************************************************/
    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    /***********************************************************************/
    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    /***********************************************************************/
    public hello.models.Role getRole() {
        return Role;
    }

    public void setRole(hello.models.Role role) {
        Role = role;
    }
}