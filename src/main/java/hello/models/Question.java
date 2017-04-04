package hello.models;

<<<<<<< HEAD
<<<<<<< HEAD
/**
 * Created by Hector on 1/28/2017.
 */

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
=======
import javax.persistence.*;
import java.util.Set;
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
import javax.persistence.*;
import java.util.Set;
>>>>>>> refs/remotes/origin/master


@Entity // This tells Hibernate to make a table out of this class
public class Question {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

<<<<<<< HEAD
<<<<<<< HEAD
    private String Type;

    private String Status;

    private String Content;
=======
=======
>>>>>>> refs/remotes/origin/master
    private String type;

    private String status;

    private String content;

    private String hint;

    private boolean hasHint;
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

<<<<<<< HEAD
<<<<<<< HEAD
    public void setType(String Type) {
        this.Type = Type;
    }

    public String getType() {
        return Type;
    }
    public void setContent(String Content) {
        this.Content = Content;
    }

    public String getContent() {
        return Content;
    }





=======
=======
>>>>>>> refs/remotes/origin/master
    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public String getStatus()
    {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public boolean isHasHint() {
        return hasHint;
    }

    public void setHasHint(boolean hasHint) {
        this.hasHint = hasHint;
    }
<<<<<<< HEAD
>>>>>>> b52cc917bd6158e211e6fd5ad8ad68cceba8ac8e
=======
>>>>>>> refs/remotes/origin/master
}