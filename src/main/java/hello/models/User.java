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
<<<<<<< HEAD

    @Column(name = "password", nullable = false)
    private String password;

    private String title;
    private String organization;
    private String email;

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


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }
=======

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


>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
}