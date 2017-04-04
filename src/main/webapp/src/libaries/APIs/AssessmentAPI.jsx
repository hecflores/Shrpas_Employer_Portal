import $ from 'jquery';

class AssessmentAPI{




    createNewAssessmentAndRedirect(assessmentData){
        $.ajax({
            url: "/rest/assessments",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(assessmentData)
        }).done(function (data) {
            window.location="/app/assessments/" + data.id;
        });
    }

    /**
     * @function add
     * @param assessmentID
     * @param questionData
     */
    addNewQuestionToAssessment(assessmentID, questionData){
        $.ajax({
            url: "/rest/assessments/" + assessmentID + "/question",
            method: "POST",
            contentType: "application/json",
            data: json.stringify(questionData)
        }).success(function (data) {
            console.log("Question successfully saved to the assessment");
        }).done(function (data) {
            
        });
    }
}