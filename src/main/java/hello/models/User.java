package hello.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import groovy.transform.ToString;

import javax.persistence.*;

import java.io.Serializable;

@Entity(name = "User")
@Table(name = "user")
@ToString(excludes = "password")
public class User implements Serializable{

//    private final static PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Id
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;


    @ManyToOne
    private Role role;

    public User(){

    }

    public User(String username){
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }


}