import React from 'react';
import PageContent from 'components/Template/PageContent.jsx';
import ExistingQuestions from 'components/Assessment/Components/ExistingQuestions/ExistingQuestions.jsx';
export const AddExistingQuestion = (props)=>{
    return  <PageContent SidePanel={null} PageTitle="New or Existing Question">
                <ExistingQuestions assessmentID={props["id"]}/>
            </PageContent>
};

export default AddExistingQuestion