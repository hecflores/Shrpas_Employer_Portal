import React from 'react';

import Header from './Header.jsx';
import Body from './Body.jsx';

class AssessmentObject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }

  render(){
    return (
      <div>
        <Header />
        <Body title={this.props.title}/>
      </div>
    );
  }
}

export default AssessmentObject;