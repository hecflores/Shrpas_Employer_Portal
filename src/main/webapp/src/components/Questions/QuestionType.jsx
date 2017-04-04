
import React from 'react';
import ReactDom from 'react-dom';

/***************************************************************************/
/* Question Type                                                           */
/***************************************************************************/
class QuestionType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="label label-primary">{this.props.type}</span>);
    }

}

export default QuestionType;