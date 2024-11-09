import { useState, useEffect } from 'react';

const TriviaQuestion = () => {
    const [category, setCategory] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

    useEffect(() => {
        const fetchTrivia = async () => {
            const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
            const data = await response.json();
            const triviaItem = data.results[0];
            setCategory(triviaItem.category);
            setQuestionText(triviaItem.question);
            setCorrectAnswer(triviaItem.correct_answer);
        };

        fetchTrivia().catch((err) => console.error(err));
    }, []);

    const toggleRevealAnswer = () => {
        setIsAnswerRevealed(!isAnswerRevealed);
    };

    return (
        <div className="trivia-question">
            <div className="category-info">{category}</div>
            <h3 className="question-text">{questionText}</h3>
            {isAnswerRevealed && (
                <div className={`answer-text ${correctAnswer === 'True' ? 'true-answer' : 'false-answer'}`}>
                    {correctAnswer}
                </div>
            )}
            <button
                type="button"
                onClick={toggleRevealAnswer}
                className="reveal-button"
            >
                {isAnswerRevealed ? 'Hide Answer' : 'Reveal Answer'}
            </button>
        </div>
    );
};

export default TriviaQuestion;