import React, {useState} from "react";

function Cell({cellKey, isMine}) {
    const [cellclass, setCellClass] = useState("cell");
    const handleClick = () => {
        //on click it opens the cell, event listener
        if (isMine) {
           console.log('bomb_opened');
           return setCellClass('cell bomb_opened');
        } else {
            console.log("empty");
            return setCellClass('cell opened');
        }
    }
    const handleRightClick = () => {
        //on right click it fires the cell, event listener
        if (isMine) {
            console.log('fired');
            return setCellClass('cell fired');
        } else {
            console.log("empty");
            return setCellClass('cell opened');
        }
    }

    // if (isMine){
    //     //rendering the cells with bombs
    //
    //     return (
    //         //with_bombs class is only for testing&developing
    //         <div className={cellclass + " with_bombs"} onClick={handleClick}
    //              onContextMenu={handleRightClick}></div>
    //     )
    // }
    return (
        <>
            <div className={cellclass} onClick={handleClick}
                 onContextMenu={handleRightClick}></div>


            {/*{cellclass === "cell fired" ?*/}
            {/*    <img src={"./resources/fired.svg"}/>*/}
            {/*    : cellclass === "cell bomb_opened" ?*/}
            {/*        <img src={"./resources/target.svg"}/>*/}
            {/*        : <div className={cellclass} onClick={handleClick}*/}
            {/*               onContextMenu={handleRightClick}></div>*/}
            {/*}*/}
        </>
    )
        ;
}

function Field() {
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
               cells.push(<Cell key={`${row}-${col}`} isMine={isBomb}/>);
            }
        }
        placeBombs();
        return cells;
    };

    const placeBombs = () => {
        //only returns in the console true for each true property of the cells
        for (let i = 0; i < cells.length; i++){
            if (cells[i].props.isMine) {
                console.log(cells[i].props.isMine);
            }
        }
    }


    return (
        <div>
            <div className="game-board">
                    {generateCells()}
            </div>
        </div>
    )
}

export default Field;