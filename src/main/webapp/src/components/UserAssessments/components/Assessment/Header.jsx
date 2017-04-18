import React from 'react';
import $ from 'jquery';
import DateFixer from 'components/Tools/DataFixer.jsx';

class Header extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }
	render(){
		return (
      <div className='container-header'>
        Ended {DateFixer.format(this.props.obj["createdAt"])}
      </div>
		);
	}
}

export default Header;