// This component will render the question text , as well as a set of buttons to let the user pick an answer.

import React, { useState } from 'react';

const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options)
    return ( 
        <div className="questionBox">
            <div className="question">{question}</div>
            {
                answer.map((text, index) => (
                    <button 
                        key={index} 
                        className="answerBtn"
                        onClick={() => {
                            setAnswer([text]);
                            selected(text);
                        }}
                    >{text}</button>
                ))
            }
        </div>
     );
}
 
export default QuestionBox;