import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import GenericQuestion from './GenericQuestion.jsx';
/***************************************************************************/
/* Question(Text Question)                                               */
/***************************************************************************/
class TextQuestion extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <GenericQuestion props={this.props}>
                <h3>Question</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="questionEntered2">Question</label>
                        <input type="text" className="form-control" id="questionEntered2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="questionContent">Question</label>
                        <textarea  className="form-control" id="questionContent"/>
                    </div>
                </form>
            </GenericQuestion>);
    }
}
export default TextQuestion;