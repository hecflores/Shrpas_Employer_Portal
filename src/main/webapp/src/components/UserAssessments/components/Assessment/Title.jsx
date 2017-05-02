import React from 'react';

class Title extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    };
  }
    render(){
      return (
         <div className='container-title'>{this.props.title}</div>
      );
    }
}

export default Title;
