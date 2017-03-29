package hello.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

    public Role() {
        Description = "Unkown";
    }

    public Role(String RoleID) {
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