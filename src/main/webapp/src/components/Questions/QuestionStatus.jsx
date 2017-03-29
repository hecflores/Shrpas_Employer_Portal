import React from 'react';
import ReactDom from 'react-dom';


/***************************************************************************/
/* Question Status                                                         */
/***************************************************************************/
class QuestionStatus extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="label label-primary">{this.props.status}</span>);
    }
}

export default QuestionStatus;