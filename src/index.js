import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';

class QuizBee extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="title">QuizBee</div>
            </div>
        )
    }
}

ReactDOM.render(<QuizBee />, document.getElementById('root'));
