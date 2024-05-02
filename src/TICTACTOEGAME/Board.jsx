import React, {useState} from 'react';
import Sqaure from './Square';


const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);

    const check = (state) => {
        let flag = true;
        for(let i = 0; i < state.length; i++) {
            if(state[i] !== null){
                flag = false;
            }else{
                flag = true;
                break;
            }
        }
        return flag;
    }
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for(let logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a] != null && state[a] === state[b] && state[b] === state[c]){
                return state[a];
            }
        }
        return false;
    };
    
    const isWinner = checkWinner();

    const playAgain = () => {
        setState(Array(9).fill(null));
    };
    const handleClick = (index, count) =>{
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "O";
        setState(copyState);
        setIsXturn(!isXturn);
        console.log(setState)
        
    };
    return (
        <div className="board-container">
            {isWinner ? (<>{isWinner} won the game <button onClick={() => playAgain()}>Play again</button></>):(

            <>
            <>{check(state) ? "" : (<> It is a draw <button onClick={() => playAgain()}>Play again</button></>) }</>
            
            <h3>Player {isXturn ? "X" : "O"} please make your move</h3>
            <div className="board-row">
            
                <Sqaure onClick={() => handleClick(0)} val={state[0]} />
                <Sqaure onClick={() => handleClick(1)} val={state[1]} />
                <Sqaure onClick={() => handleClick(2)} val={state[2]} />
                
            </div>
            <div className="board-row">

                <Sqaure onClick={() => handleClick(3)} val={state[3]} />
                <Sqaure onClick={() => handleClick(4)} val={state[4]} />
                <Sqaure onClick={() => handleClick(5)} val={state[5]} />
            </div>
            <div className="board-row">

                <Sqaure onClick={() => handleClick(6)} val={state[6]} />
                <Sqaure onClick={() => handleClick(7)} val={state[7]} />
                <Sqaure onClick={() => handleClick(8)} val={state[8]} />
            </div>
            </>
            )}
        </div>
    );
};

export default Board;