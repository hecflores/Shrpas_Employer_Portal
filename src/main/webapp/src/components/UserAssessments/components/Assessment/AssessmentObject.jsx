import React from 'react';

import Header from './Header.jsx';
import Body from './Body.jsx';


class AssessmentObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSelect=this.onSelect.bind(this);
    }

    onSelect() {
        this.props.onSelect(this.props.obj);
    }

    render() {
        const {
            obj,
            onSelect,
            ...leftOvers
        } = this.props;
       
        return (
            <div onClick={this.onSelect} className={this.props.className || "col-lg-3 col-md-4 col-lg-6 cell"}>
                <div className="cell">
                    <Header {...this.props}/>
                    <Body title={this.props.obj["name"]} questions={this.props.obj["questionSet"]}/>
                </div>
            </div>
        );
    }
}
AssessmentObject.propTypes = {
    obj: React.PropTypes.object,
    onSelect:React.PropTypes.func
};
export default AssessmentObject;