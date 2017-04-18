package hello.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TargetGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "group_participant", joinColumns = @JoinColumn(name = "group_id"), inverseJoinColumns = @JoinColumn(name = "participant_id"))
    private Set<Participant> participantSet;

    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(name="users_targetgroups", joinColumns=@JoinColumn(name="group_id"), inverseJoinColumns=@JoinColumn(name="user_id"))
    private Set<User> usersSet;

<<<<<<< HEAD
//    @ManyToOne
//    private Assessment assessment;
=======
    @ManyToOne
    private Assessment assessment;
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<User> getUsersSet() {
        return usersSet;
    }

    public void setUsersSet(Set<User> usersSet) {
        this.usersSet = usersSet;
    }

    public Set<Participant> getParticipantSet() {
        return participantSet;
    }

    public void setParticipantSet(Set<Participant> participantSet) {
        this.participantSet = participantSet;
    }

<<<<<<< HEAD
//    public Assessment getAssessment() {
//        return assessment;
//    }
//
//    public void setAssessment(Assessment assessment) {
//        this.assessment = assessment;
//    }
=======
    public Assessment getAssessment() {
        return assessment;
    }

    public void setAssessment(Assessment assessment) {
        this.assessment = assessment;
    }
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e


}
