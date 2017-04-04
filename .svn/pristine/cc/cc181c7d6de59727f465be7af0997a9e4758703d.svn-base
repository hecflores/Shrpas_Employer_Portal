import React from "react";
import $ from 'jquery';
import AssessmentAPI from "../../libaries/APIs/AssessmentAPI.jsx";

/**
 * @class AssessmentNew
 * @extends React.Component
 * @description The component in which creates an initial assessment for the creation of assessments
 */
class AssessmentNew extends React.Component{

    /**
     * @constructor
     * @param props
     */
    constructor(props){
        super(props);

        this.api=AssessmentAPI.instance.hook().on("create-new-assessment",function(data){
            window.location=data.url;
        });

        this.state={
            init:true,
            data:{
                name: ""
            }
        };
    }

    /**
     * @description Creates a POST request that submits the data. After that, done() will redirect the user to the next
     *              page within the assessment creation.
     */
    createAndRedirect(){
        this.api.getListener().createNewAssessmentAndRedirect(this.state.data);
        // $.ajax({
        //     url:"/rest/assessments",
        //     method:"POST",
        //     contentType:"application/json",
        //     data:JSON.stringify(this.state.data)
        // }).done(function(data){
        //     window.location="/app/assessments/"+data.id;
        // });
    }

    /**
     * @function The render method to the NewAssessment component
     * @description The inital state is false at first enabling the user to enter the name of the assessment. Once the
     * user hits the submit button, the assessment will go into a state in which creates a POST request.
     * @returns {XML}
     */
    render()
    {
        if(!this.state.init){
            this.createAndRedirect();
        }

        return (
                <div className="new-assessment-name-container" style={{
                        border: '0',
                        borderRadius: '4px',
                        bottom: 'auto',
                        minHeight: '10rem',
                        left: '50%',
                        padding: '2rem',
                        position: 'fixed',
                        right: 'auto',
                        top: '50%',
                        transform: 'translate(-50%,-50%)',
                        minWidth: '20rem',
                        width: '80%',
                        maxWidth: '60rem'
                    }}>
                    <h2 className="new-assessment-name-title">New Assessment</h2>
                    <input ref="assessmentNameInput" onChange={(e) => this.setState({data: {name: e.target.value}})} type="text" className="new-assessment-name-input form-control assessment-create-set-name-input" placeholder="Enter the Name" />
                    <input className="new-assessment-name-btn" type="submit" onClick={() => {this.setState({init: false})}}/>
                </div>
        );
    }
}

export default AssessmentNew;