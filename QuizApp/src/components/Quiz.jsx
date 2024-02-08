import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQuestionIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setAnswerState('answered');
            setUserAnswer((prevUserAnswer) => {
                return [...prevUserAnswer, selectedAnswer];
            });

            setTimeout(() => {
                if (
                    selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]
                ) {
                    setAnswerState('correct');
                } else {
                    setAnswerState('wrong');
                }

                setTimeout(() => {
                    setAnswerState('');
                }, 2000);
            }, 1000);
        },
        [activeQuestionIndex]
    );
    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return (
            <div id='summary'>
                <img
                    src={quizCompleteImg}
                    alt='Trophy!'
                />
                <h2>Quiz completed!</h2>
            </div>
        );
    }

    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;
