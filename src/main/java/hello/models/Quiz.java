package hello.models;

/**
 * Created by Hector on 1/28/2017.
 */

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity // This tells Hibernate to make a table out of this class
public class Quiz {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String Type;

    private String Status;

    private String Content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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





}