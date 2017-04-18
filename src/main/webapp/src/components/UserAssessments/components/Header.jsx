import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router';
=======

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
class Header extends React.Component{
  render(){
    return(
      <div className="row custom-row headerborder">
        <div className = "col-md-6 bordering">
          Recent Assessments
        </div>
        <div className="col-md-6 bordering">
<<<<<<< HEAD
          <Link to="/app/assessments/create" type='button' className='btn btn-default buttonstyle '>NEW</Link>
=======
          <button type='button' className='btn btn-default buttonstyle '>NEW</button>
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        </div> 
      </div>);
  }
}
export default Header;