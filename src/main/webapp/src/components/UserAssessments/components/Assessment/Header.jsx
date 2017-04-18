import React from 'react';
<<<<<<< HEAD
import $ from 'jquery';
import DateFixer from 'components/Tools/DataFixer.jsx';
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e

class Header extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }
	render(){
		return (
      <div className='container-header'>
<<<<<<< HEAD
        Ended {DateFixer.format(this.props.obj["createdAt"])}
=======
        Ended 1/15/17
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
      </div>
		);
	}
}

export default Header;