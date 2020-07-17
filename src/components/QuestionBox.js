// This component will render the question text , as well as a set of buttons to let the user pick an answer.

import React from 'react';

const QuestionBox = ({question, options}) => {
    return ( 
        <div className="questionBox">
            <div className="question">{question}</div>
        </div>
     );
}
 
export default QuestionBox;