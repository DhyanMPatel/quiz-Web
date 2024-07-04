import { useState } from "react";

function Questions({
    timer,
    questions,
    currentQuestion,
    isLastq,
    handleAnswerClick,
    handleNextQuestion
}) {
    const optionIds = ['A', 'B', 'C', 'D'];
    const [selectedOption, setSelectedOption] = useState(null);

    /// Handle if Que is Last then show "Submit" btn otherwise show "next Que" btn
    function handleOptionQuestion(option){
        setSelectedOption(option);

        handleAnswerClick(option);
    }

    return (
        <div className="container mt-3 bg-light">
            <div>
                <div className="card-body">
                    <p className="mt-2 text-warning">Time Remaining : {timer}</p>
                    <h4 className="card-text">
                        {/* It will Display Question one-by-one */}
                        {questions[currentQuestion].id}{') '} {questions[currentQuestion].question}
                    </h4>
                    <div className="list-group">
                        {
                            /// .map(() => ()) must see
                            questions[currentQuestion].options.map((option, index) => (
                                
                                /// here button provide Options of MCQ and selection of them
                                <button key={index} className={`list-group-item list-group-item-action mt-2 ${selectedOption === option ? 'active': ''}`} onClick={() => {handleOptionQuestion(option)}}style={{backgroundColor:selectedOption === option? 'lightblue':'white',border:'1px solid gray'}}>{optionIds[index]}{') '}{option}</button>
                            ))
                        }
                    </div>
                    <br />
                    {/* Provide Bottom indlude Total Question and Submit Button */}
                    <div className="row">
                        <div className="col">
                            <p className="card-title">Question {currentQuestion + 1} of {questions.length}</p>
                        </div>
                        <div className="col">
                            {
                                isLastq? (
                                    <button onClick={handleNextQuestion} className="btn btn-primary btn-sm">Submit</button>
                                ) : (
                                    <button onClick={handleNextQuestion} className="btn btn-primary btn-sm">Next Question</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Questions;