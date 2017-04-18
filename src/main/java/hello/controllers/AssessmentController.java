<<<<<<< HEAD
package hello.controllers;

import hello.helpers.PatchClasses;
import hello.models.Assessment;
import hello.models.Question;
import hello.models.User;
import hello.repositories.AssessmentRepository;
import hello.repositories.QuestionRepository;
import hello.repositories.UserRepository;
import hello.repositories.exceptions.AssessmentNotFoundException;
import hello.repositories.exceptions.NotAuthorizedException;
import hello.repositories.exceptions.QuestionNotFoundException;
import hello.repositories.exceptions.UserNotFoundException;
import org.hibernate.validator.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.web.bind.annotation.*;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;


/**
localhost:8080/assessments
 */
@RestController
public class AssessmentController{


    private static JavaMailSenderImpl StaticEmailSender;

    private AssessmentRepository assessmentRepository;
    private QuestionRepository questionRepository;
    private UserRepository userRepository;
    private JavaMailSender emailSender;

    @Autowired
    public AssessmentController(JavaMailSenderImpl emailSender, AssessmentRepository assessmentRepository, QuestionRepository questionRepository, UserRepository userRepository){
        this.assessmentRepository = assessmentRepository;
        this.questionRepository = questionRepository;
        this.userRepository=userRepository;
        this.emailSender=emailSender;
        AssessmentController.StaticEmailSender=emailSender;
    }

    public static void sendEmail() throws Exception{
        MimeMessagePreparator  crunchifyMsg = new MimeMessagePreparator(){
            public void prepare(MimeMessage mimeMessage) throws Exception {

                mimeMessage.setRecipient(Message.RecipientType.TO,
                        new InternetAddress("hectorhpflores72@gmail.com"));
                mimeMessage.setSubject("SHRPAS Assessment");
                mimeMessage.setFrom( new InternetAddress("updates@shrpas.com","SHRPAS Updates"));
                mimeMessage.setText("Hello, this is a test for the SHRPAS Assessment Portal");
            }
        };

        StaticEmailSender.send(crunchifyMsg);

    }
    /**
     localhost:8080/rest/assessments/{id}/
     Gets a Assessment
     */
    @RequestMapping(value = "/rest/send-email-test", method=RequestMethod.GET)
    public ResponseEntity<String> sendEmailTest() throws Exception {
        AssessmentController.sendEmail();
        return new ResponseEntity<String>("Success", HttpStatus.OK);

    }


    /**
        localhost:8080/rest/assessments/{id}/
        Gets a Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/", method=RequestMethod.GET)
    public ResponseEntity<Assessment> getAssessment(@PathVariable("id") int assessmentID) {
        Assessment assessment = this.assessmentRepository.findOne(assessmentID);
        if(assessment != null){
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }else{
            return new ResponseEntity<Assessment>(assessment, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Adds an assessment
     * @param assessment The Body of the Assessment
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addAssessment(HttpSession session,@RequestBody Assessment assessment) throws Exception
    {
        /*******************************************************************/
        /* Add the Assessment                                              */
        /*******************************************************************/
        Assessment newAssessment = assessmentRepository.save(assessment);
        newAssessment.setUsersSet(((new HashSet<User>() {})));

        /*******************************************************************/
        /* Adds the User to the assessment                                 */
        /*******************************************************************/
        try {
            this.addUserToAssessment(newAssessment, AuthenticationController.GetUser(session));
        }
        catch(Exception e){
            assessmentRepository.delete(newAssessment); // Roll Back
            throw e;
        }

        /*******************************************************************/
        return new ResponseEntity<Assessment>(newAssessment, HttpStatus.OK);
    }

    /**
     * Updates an assessment
     * @param assessmentID The Id of the Assessment to be used
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}", method=RequestMethod.PATCH)
    public ResponseEntity<Assessment> updateAssessment(@PathVariable("id") int assessmentID, @RequestBody Assessment assessment) throws Exception {
        Assessment assessmentToBeUpdated = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if(assessmentToBeUpdated == null)
        {
            throw new AssessmentNotFoundException(assessmentID);
        }

        /*******************************************************************/
        PatchClasses.PerformAPatch(assessmentToBeUpdated, assessment);
        assessmentRepository.save(assessmentToBeUpdated);
        return new ResponseEntity<Assessment>(assessmentToBeUpdated, HttpStatus.OK);
    }

    /**
     * Adds a question to an assessment
     * @param assessmentID The Id of the Assessment to be used
     * @param question The body of a question(Will be creating a new question)
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/question", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addQuestion(@PathVariable("id") int assessmentID, @RequestBody Question question) throws Exception
    {
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if(assessment != null)
        {
            assessment = this.addQuestionToAssessment(assessment, question);
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }

        /*******************************************************************/
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds an existing question to an assessment
     * @param assessmentID The Id of the Assess to be used
     * @param questionId The id of the Question to be used
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/question/{questionId}", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addExistingQuestion(@PathVariable("id") int assessmentID, @PathVariable("questionId") int questionId){
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        /* We have found the assessment                                    */
        /*******************************************************************/
        if(assessment != null)
        {
            Question question = questionRepository.findOne(questionId);

            /***************************************************************/
            if(question != null)
            {
                assessment = this.addQuestionToAssessment(assessment, question);
                return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
            }
            else
            {
                throw new QuestionNotFoundException(questionId);
            }
        }
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds a question to an assessment
     * @param assessmentID Assessment ID
     * @param user User that is being added(Must exist)
     * @return ResponseEntity<Assessment>
     */
    @RequestMapping(value = "/rest/assessments/{id}/users", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addUser(@PathVariable("id") int assessmentID, @RequestBody User user) throws Exception {
        Assessment assessment = assessmentRepository.findOne(assessmentID);
        if(assessment != null)
        {
            /***************************************************************/
            if(user==null)
            {
                throw new UserNotFoundException("No User Name was found in the body");
            }

            /***************************************************************/
            if(user.getUsername()==null)
            {
                throw new UserNotFoundException(null,"No User Name was found in the body");
            }

            /***************************************************************/
            User foundUser=userRepository.findOne(user.getUsername());

            /***************************************************************/
            if(foundUser==null)
            {
                throw new UserNotFoundException(user.getUsername());
            }

            /***************************************************************/
            assessment = this.addUserToAssessment(assessment, foundUser);
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds a question to an assessment
     * @param session Users Session(Were we will pick the user making the request)
     * @return ResponseEntity<Assessment>
     */
    @RequestMapping(value = "/rest/assessments", method=RequestMethod.GET)
    public ArrayList<Assessment> getAllAssessments(HttpSession session) throws Exception
    {
        /*******************************************************************/
        ArrayList<Assessment> assessments = new ArrayList<Assessment>();

        /*******************************************************************/
        for (Assessment assessment : assessmentRepository.findForUser(AuthenticationController.GetUser(session).getUsername()))
        {
            assessments.add(assessment);
        }

        /*******************************************************************/
        return assessments;


    }



    /**
     * Deletes an assessment
     * @param assessmentID Id of the assessment
     * @return A boolean indicating if it was trully deleted
     */
    @RequestMapping(value = "/rest/assessments/{id}/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteAssessment(@PathVariable("id") int assessmentID)
    {
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if (assessment != null)
        {
            assessmentRepository.delete(assessment);
            return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.OK);
        }

        /*******************************************************************/
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /***********************************************************************/
    /* To Make Life Easier                                                 */
    /***********************************************************************/
    private Assessment addQuestionToAssessment(Assessment assessment, Question question)
    {
        Set<Question> questionSet = assessment.getQuestionSet();
        questionSet.add(question);
        assessment.setQuestionSet(questionSet);
        return this.assessmentRepository.save(assessment);
    }

    /***********************************************************************/
    private Assessment addUserToAssessment(Assessment assessment, User user)
    {
        Set<User> userSet = assessment.getUsersSet();
        userSet.add(user);
        assessment.setUsersSet(userSet);
        return this.assessmentRepository.save(assessment);
    }
=======
package hello.controllers;

import hello.helpers.PatchClasses;
import hello.models.Assessment;
import hello.models.Question;
import hello.models.User;
import hello.repositories.AssessmentRepository;
import hello.repositories.QuestionRepository;
import hello.repositories.UserRepository;
import hello.repositories.exceptions.AssessmentNotFoundException;
import hello.repositories.exceptions.NotAuthorizedException;
import hello.repositories.exceptions.QuestionNotFoundException;
import hello.repositories.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;


/**
localhost:8080/assessments
 */
@RestController
public class AssessmentController{



    private AssessmentRepository assessmentRepository;
    private QuestionRepository questionRepository;
    private UserRepository userRepository;

    @Autowired
    public AssessmentController(AssessmentRepository assessmentRepository, QuestionRepository questionRepository,UserRepository userRepository){
        this.assessmentRepository = assessmentRepository;
        this.questionRepository = questionRepository;
        this.userRepository=userRepository;
    }


    /**
        localhost:8080/rest/assessments/{id}/
        Gets a Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/", method=RequestMethod.GET)
    public ResponseEntity<Assessment> getAssessment(@PathVariable("id") int assessmentID) {
        Assessment assessment = this.assessmentRepository.findOne(assessmentID);
        if(assessment != null){
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }else{
            return new ResponseEntity<Assessment>(assessment, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Adds an assessment
     * @param assessment The Body of the Assessment
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addAssessment(HttpSession session,@RequestBody Assessment assessment) throws Exception
    {
        /*******************************************************************/
        /* Add the Assessment                                              */
        /*******************************************************************/
        Assessment newAssessment = assessmentRepository.save(assessment);
        newAssessment.setUsersSet(((new HashSet<User>() {})));

        /*******************************************************************/
        /* Adds the User to the assessment                                 */
        /*******************************************************************/
        try {
            this.addUserToAssessment(newAssessment, AuthenticationController.GetUser(session));
        }
        catch(Exception e){
            assessmentRepository.delete(newAssessment); // Roll Back
            throw e;
        }

        /*******************************************************************/
        return new ResponseEntity<Assessment>(newAssessment, HttpStatus.OK);
    }

    /**
     * Updates an assessment
     * @param assessmentID The Id of the Assessment to be used
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}", method=RequestMethod.PATCH)
    public ResponseEntity<Assessment> updateAssessment(@PathVariable("id") int assessmentID, @RequestBody Assessment assessment) throws Exception {
        Assessment assessmentToBeUpdated = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if(assessmentToBeUpdated == null)
        {
            throw new AssessmentNotFoundException(assessmentID);
        }

        /*******************************************************************/
        PatchClasses.PerformAPatch(assessmentToBeUpdated, assessment);
        assessmentRepository.save(assessmentToBeUpdated);
        return new ResponseEntity<Assessment>(assessmentToBeUpdated, HttpStatus.OK);
    }

    /**
     * Adds a question to an assessment
     * @param assessmentID The Id of the Assessment to be used
     * @param question The body of a question(Will be creating a new question)
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/question", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addQuestion(@PathVariable("id") int assessmentID, @RequestBody Question question) throws Exception
    {
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if(assessment != null)
        {
            assessment = this.addQuestionToAssessment(assessment, question);
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }

        /*******************************************************************/
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds an existing question to an assessment
     * @param assessmentID The Id of the Assess to be used
     * @param questionId The id of the Question to be used
     * @return The Assessment
     */
    @RequestMapping(value = "/rest/assessments/{id}/question/{questionId}", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addExistingQuestion(@PathVariable("id") int assessmentID, @PathVariable("questionId") int questionId){
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        /* We have found the assessment                                    */
        /*******************************************************************/
        if(assessment != null)
        {
            Question question = questionRepository.findOne(questionId);

            /***************************************************************/
            if(question != null)
            {
                assessment = this.addQuestionToAssessment(assessment, question);
                return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
            }
            else
            {
                throw new QuestionNotFoundException(questionId);
            }
        }
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds a question to an assessment
     * @param assessmentID Assessment ID
     * @param user User that is being added(Must exist)
     * @return ResponseEntity<Assessment>
     */
    @RequestMapping(value = "/rest/assessments/{id}/users", method=RequestMethod.POST)
    public ResponseEntity<Assessment> addUser(@PathVariable("id") int assessmentID, @RequestBody User user) throws Exception {
        Assessment assessment = assessmentRepository.findOne(assessmentID);
        if(assessment != null)
        {
            /***************************************************************/
            if(user==null)
            {
                throw new UserNotFoundException("No User Name was found in the body");
            }

            /***************************************************************/
            if(user.getUsername()==null)
            {
                throw new UserNotFoundException(null,"No User Name was found in the body");
            }

            /***************************************************************/
            User foundUser=userRepository.findOne(user.getUsername());

            /***************************************************************/
            if(foundUser==null)
            {
                throw new UserNotFoundException(user.getUsername());
            }

            /***************************************************************/
            assessment = this.addUserToAssessment(assessment, foundUser);
            return new ResponseEntity<Assessment>(assessment, HttpStatus.OK);
        }
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /**
     * Adds a question to an assessment
     * @param session Users Session(Were we will pick the user making the request)
     * @return ResponseEntity<Assessment>
     */
    @RequestMapping(value = "/rest/assessments", method=RequestMethod.GET)
    public ArrayList<Assessment> getAllAssessments(HttpSession session) throws Exception
    {
        /*******************************************************************/
        ArrayList<Assessment> assessments = new ArrayList<Assessment>();

        /*******************************************************************/
        for (Assessment assessment : assessmentRepository.findForUser(AuthenticationController.GetUser(session).getUsername()))
        {
            assessments.add(assessment);
        }

        /*******************************************************************/
        return assessments;


    }



    /**
     * Deletes an assessment
     * @param assessmentID Id of the assessment
     * @return A boolean indicating if it was trully deleted
     */
    @RequestMapping(value = "/rest/assessments/{id}/delete", method = RequestMethod.DELETE)
    public ResponseEntity<Boolean> deleteAssessment(@PathVariable("id") int assessmentID)
    {
        Assessment assessment = assessmentRepository.findOne(assessmentID);

        /*******************************************************************/
        if (assessment != null)
        {
            assessmentRepository.delete(assessment);
            return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.OK);
        }

        /*******************************************************************/
        else
        {
            throw new AssessmentNotFoundException(assessmentID);
        }
    }

    /***********************************************************************/
    /* To Make Life Easier                                                 */
    /***********************************************************************/
    private Assessment addQuestionToAssessment(Assessment assessment, Question question)
    {
        Set<Question> questionSet = assessment.getQuestionSet();
        questionSet.add(question);
        assessment.setQuestionSet(questionSet);
        return this.assessmentRepository.save(assessment);
    }

    /***********************************************************************/
    private Assessment addUserToAssessment(Assessment assessment, User user)
    {
        Set<User> userSet = assessment.getUsersSet();
        userSet.add(user);
        assessment.setUsersSet(userSet);
        return this.assessmentRepository.save(assessment);
    }
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
}