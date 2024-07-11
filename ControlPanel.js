import React from "react";

function ControlPanel() {
    let flagCounter = 10;
    return (
        <div className="control-panel-container">
            <p className="control-panel-item">💣{flagCounter}</p>
            <button className="control-panel-button">Reset</button>
            <p className="control-panel-item">0:00</p>
        </div>
    );
}

export default ControlPanel;