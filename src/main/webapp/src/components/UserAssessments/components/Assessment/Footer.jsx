import React from 'react';

class Footer extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }
  render(){
    return(
        <div className="row container-footer">
          <div className="col-md-3">Response</div>
          <div className="col-md-9">Progress Bar</div>
        </div>
    );
  }
}

export default Footer;
