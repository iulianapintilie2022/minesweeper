import React from "react";

function ControlPanel({seconds}) {
    let flagCounter = 10;
    const formatTime = (seconds) => {
        if (seconds){
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
        } else {
            return `0:00`;
        }
    }

    return (
        <div className="control-panel-container">
            <p className="control-panel-item">💣{flagCounter}</p>
            <button className="control-panel-button">Reset</button>
            <p className="control-panel-item">{formatTime(seconds)}</p>
            <p className="control-panel-item">s{seconds}</p>
        </div>
    );
}

export default ControlPanel;