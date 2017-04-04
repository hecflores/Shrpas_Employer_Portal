import EventHandler from '../EventHandler.jsx';

class QuestionsAPI{
    constructor(){
        this.eventHandler = new EventHandler();


        /**
          * Listens for any wanting to fetch for the questions...
          **/
        this.eventHandler.on("questions","load","start", function (eventData) {

            /***************************************************************/
            $.getJSON('/rest/questions', function (data) {

                eventData.sender.trigger("questions", "load", "finished", {questions: data});
            });

            /***************************************************************/
            return questions;
        });

        /**
         * Listens for any finished updates
         **/
        this.eventHandler.on("questions","load","finished", function (eventData) {

            /***************************************************************/
            let questions = eventData.questions.map(function (question, index) {
                return question;
            });

            /***************************************************************/
            eventData.sender.trigger("questions", "finalized", {questions: questions});
        });


      //This one I will make which will hook into your stuff...
        this.eventHandler.on("get-all-questions-of-assessment", function (eventData) {

        });

        /**
         * Listens for anybody deleting a question.
         **/
        this.eventHandler.on("questions", "deletion","start",function (eventData) {
            //Code to delete when finished call eventData.sender.trigger("questions","deletion","finished")
        });
        this.eventHandler.on("questions", "deletion","finished",function (eventData) {
            eventData.sender.trigger("questions","load","start");
        });

        /**
         * Just like the above di the update the same..
         **/
        this.eventHandler.on("update-question", function (eventData) {
            eventData.sender.trigger("questions","load","start");
        });

        this.eventHandler.on("create-question", function (eventData) {
            eventData.sender.trigger("questions","load","start");
        });
    }

    //TODO Mat, this wont actually work... The Event Handler doesnt work the way you wanted to...
    //TODO      Below I wrote an example of how it whould work
    //Example trigger
    // getAllQuestions(){
    //     const questions =
    //     return questions;
    // }
    getAllQuestionsOfAssessment(){

    }

    hookToQuestionsUpdates(callback){
        this.eventHandler.on("questions","finalized",function(e){
            callback(e.questions);
        })
    }

}