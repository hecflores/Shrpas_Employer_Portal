import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router';
import AssessmentObject from './Assessment/AssessmentObject.jsx';

class Table extends React.Component{
	 constructor(props) {
        super(props);
      
    }

	render() {
       
		//figure out what element to pass to child
        return <div className="MyTable">{this.props.data.map(function(item,index) {
            return <AssessmentObject obj={item} className="col-md-3 col-lg-2 col-sm-6 cell" key={index} {...this.props}/>

        }.bind(this))}
        </div>;
	}
}
Table.propTypes={
	data:React.PropTypes.arrayOf(React.PropTypes.object)
};
=======

import AssessmentObject from './Assessment/AssessmentObject.jsx';

class Table extends React.Component{
  render() {
    //figure out what element to pass to child
    var items = this.props.words;
    var numberOfItems = items.length;
    var numberOfRows = Math.ceil(numberOfItems/4);
    var rows = [];
    for (var j=0; j < numberOfRows; j++) {
      var cells = [];
      for (var i=0; i < 4; i++) {
         cells.push(<div className ="col-md-3 cell"><AssessmentObject title="Software Engineer" /></div>);
      }
      rows.push(<div className="row custom-row">{cells}</div>);
    }
    return(<div className="MyTable">{rows}</div>);
  }
}

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
export default Table;