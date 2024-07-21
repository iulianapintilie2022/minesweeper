import React, {useState} from "react";
function Cell({cellkey, startTimer, stopTimer, isMine}) {
    const [cellclass, setCellClass] = useState("cell");
    //use an array to store all classes
    const handleClick = () => {
        //on click it opens the cell and starts the timer, event listener
        // if all cells have only cell class then start timer
        if (isMine) {
           console.log('bomb_opened');
           setCellClass('cell bomb_opened');
        } else {
            console.log("empty");
            setCellClass('cell opened');
        }
    }
    const handleRightClick = () => {
        //on right click it fires the cell, event listener
        if (isMine) {
            setCellClass('cell fired');
            // stopTimer();
        } else {
            setCellClass('cell opened');
        }
    }

    if (isMine){
        //rendering the cells with bombs
        return (
            //with_bombs class is only for testing&developing
            <div className={cellclass + " with_bombs"} onClick={handleClick}
                 onContextMenu={handleRightClick}></div>
        )
    }


    return (
        <>
            {cellclass === "cell fired" ?
                <div className={cellclass}>
                </div>
                : cellclass === "cell bomb_opened" ?
                    <div className={cellclass}>
                    </div>
                    : <div className={cellclass} onClick={handleClick}
                           onContextMenu={handleRightClick}></div>
            }
        </>
    )
        ;
}

function Field({startTimer, stopTimer}) {
    const cells = [];
    // const [cell, setCells] = useState();
    const rows = 9;
    const cols = 8;

    const mineRandomizer = () => {
        //randomly passes a boolean property in order to place bombs
        let randomNum = Math.floor(Math.random() * 10);
        if(randomNum >= 8){
            let isMined = true;
            return isMined;
        } else {
           let isMined = false;
            return isMined;
        }
    }

    const generateCells = () => {
        //generates cells
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let isBomb = mineRandomizer();
               cells.push(<Cell key={`x${row}y${col}`} startTimer={startTimer} stopTimer={stopTimer}
                                isMine={isBomb} />);
            }
        }
        return cells;
    };

    return (
        <div>
            <div className="game-board">
                    {generateCells()}
            </div>
        </div>
    )
}

export default Field;