import React from 'react';
import { QuizWrapper } from './styledComponents';
import Game from './components/game';
import ReadyForGame from './components/readyForGame/ReadyForGame';
import Results from './components/results';

const Quiz = ({
    isShowResults,
    isQuizInProcess,
    setIsReadyForGame,
    isUserReadyToStartQuiz,
}) => {
    return (
        <QuizWrapper>
            {isQuizInProcess ?
                !isShowResults ?
                    <Game/>
                    :
                    <Results/>
                :
                <ReadyForGame
                    callback={setIsReadyForGame}
                    isUserReadyToStartQuiz={isUserReadyToStartQuiz}
                />
            }
        </QuizWrapper>
    );
};

export default Quiz;
