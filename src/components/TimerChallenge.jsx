import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        timer.current = setTimerStarted(true);
        setTimeout(() => {
            setTimeExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);
    }
    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                result='lost'
            />

            <section className='challenge'>
                <h2>{title}</h2>
                {timeExpired && <p>You lost the game!</p>}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'}
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;
