function Score({
    score,
    setCurrentQuestion,
    setScore,
    setQuizStarted,
    setIsLastq,
    setTimer
}) {
    return (
        <div>
            <div>
                <h2>Quiz Completed!</h2>
                <h4> Your Score : {score}</h4>
                <button onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setQuizStarted(false);
                    setIsLastq(false);
                    setTimer(10);
                }}>Restart Quiz</button>
            </div>
        </div>
    )
}
export default Score;