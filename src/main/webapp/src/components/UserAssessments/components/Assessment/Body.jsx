import React from 'react';

import Footer from './Footer.jsx';
import Title from './Title.jsx';
class Body extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }
  render(){
   
    return(
      <div className='container-body'>
        <Title title={this.props.title}/>
        <div className="row custom-row">
          <div className="col-md-4">Count</div>
          <div className="col-md-4 offset-md-4">Rating</div>
        </div>
         <div className="row custom-row">
          <div className="col-md-3">Video</div>
          <div className="col-md-3">MC</div>
          <div className="col-md-3">Text</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Body;