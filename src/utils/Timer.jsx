import React, { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            // Decrease timeLeft by 1 second
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(timerInterval); // Stop the timer when timeLeft reaches 0
                    return 0; // Return 0 to prevent negative values
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []); // Empty dependency array to run effect only once

    // Format timeLeft into minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Format minutes and seconds with leading zeros if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the timer
    return (
        <div>
            <h1>{formattedMinutes}:{formattedSeconds}</h1>
        </div>
    );
}

export default Timer;
