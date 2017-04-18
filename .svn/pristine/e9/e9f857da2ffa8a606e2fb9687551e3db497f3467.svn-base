package hello.models;

/**
 * Created by Hector on 1/28/2017.
 */

import com.fasterxml.jackson.annotation.JsonCreator;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity // This tells Hibernate to make a table out of this class
public class Role {


    public Role(){
        Description="Unkown";
    }
    public Role(String RoleID){
        this.setRoleId(RoleID);
    }

    @Id
    private String RoleId;
    private String Description;


    public String getRoleId() {
        return RoleId;
    }

    public void setRoleId(String roleId) {
        RoleId = roleId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}