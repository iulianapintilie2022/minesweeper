import React from "react";

function Cell() {
    return (
        <div className="cell">
        </div>
    );
}
function Field() {
    const rows = 9;
    const cols = 8;

    const generateCells = () => {
        let cells = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                cells.push(<Cell key={`${row}-${col}`}/>);
            }
        }
        return cells;
    };

    return <div>
        <div className="game-board">
                {generateCells()}
        </div>
    </div>;
}

export default Field;