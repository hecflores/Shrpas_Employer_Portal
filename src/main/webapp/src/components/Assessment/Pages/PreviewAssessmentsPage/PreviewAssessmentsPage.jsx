import React from 'react';
import AssessmentPreview from 'components/Assessment/Components/Preview/AssessmentPreview.jsx';
import PageContent from 'components/Template/PageContent.jsx';
export const PreviewAssessmentsPage=(props)=>{
    return <PageContent PageTitle="Preview Assessment">
               <AssessmentPreview assessmentID={props.Assessment["id"]} questions={props.Assessment["questionsSet"]}/>
           </PageContent>

};

export default PreviewAssessmentsPage