import React from 'react';
import {Link} from 'react-router';
class Header extends React.Component{
  render(){
    return(
      <div className="row custom-row headerborder">
        <div className = "col-md-6 bordering">
          Recent Assessments
        </div>
        <div className="col-md-6 bordering">
          <Link to="/app/assessments/create" type='button' className='btn btn-default buttonstyle '>NEW</Link>
        </div> 
      </div>);
  }
}
export default Header;