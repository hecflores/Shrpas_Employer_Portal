import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import GenericQuestion from './GenericQuestion.jsx';
/***************************************************************************/
/* Question(Code Question)                                               */
/***************************************************************************/
class CodeQuestion extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <GenericQuestion props={this.props} active={this}>
                <h3>Code</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="questionEntered3">Question</label>
                        <input type="text" className="form-control" id="questionEntered3"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codeContent">Code</label>
                        <textarea  className="form-control" id="codeContent"/>
                    </div>
                </form>
            </GenericQuestion>);
    }
}
export default CodeQuestion;