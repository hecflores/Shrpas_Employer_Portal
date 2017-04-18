import React from 'react';
<<<<<<< HEAD
import $ from 'jquery';
=======

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
import Footer from './Footer.jsx';
import Title from './Title.jsx';
class Body extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
       
        };
      
    }
  render(){
<<<<<<< HEAD
  var questions = this.props.questions
  var questionType = {};

for(var i = 0; i< questions.length; i++) {
    var num = questions[i];
    questionType[num] = questionType[num] ? questionType[num] +1 : 1;
}
var typeCountMap = {
  "text": 0,
  "code": 0,
  "multiple-choice":0,
  "video": 0,
  "audio": 0
}

questions.map(function(question, index){
  typeCountMap[question["type"]]++;
})

=======
   
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    return(
      <div className='container-body'>
        <Title title={this.props.title}/>
        <div className="row custom-row">
<<<<<<< HEAD
          <div className="col-md-4">
            <span className="glyphicon glyphicon-edit"/>
          </div>
          <div className="col-md-4 col-md-offset-4">
            <span className="glyphicon glyphicon-star-empty"/>
            <span className="glyphicon glyphicon-star-empty"/>
            <span className="glyphicon glyphicon-star-empty"/>
          </div>
         </div>
          <div className="content-bottom ">
         <div className="row custom-row">
          <div className="col-md-3">
            <span className="glyphicon glyphicon-facetime-video">{" " + typeCountMap["video"]}</span></div>
          <div className="col-md-3">
            <span className="glyphicon glyphicon-font">{" " + typeCountMap["text"]}</span>
            </div>
          <span className="col-md-3"><i className="fa fa-file-audio-o" aria-hidden="true">Audio</i></span>
        </div>

        <Footer />
          </div>
=======
          <div className="col-md-4">Count</div>
          <div className="col-md-4 offset-md-4">Rating</div>
        </div>
         <div className="row custom-row">
          <div className="col-md-3">Video</div>
          <div className="col-md-3">MC</div>
          <div className="col-md-3">Text</div>
        </div>
        <Footer />
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
      </div>
    );
  }
}

export default Body;