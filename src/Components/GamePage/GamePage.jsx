
import { useState } from 'react';
import './GamePage.css';
import dice_1 from './dice_1.png';
import dice_2 from './dice_2.png';
import dice_3 from './dice_3.png';
import dice_4 from './dice_4.png';
import dice_5 from './dice_5.png';
import dice_6 from './dice_6.png';

function GamePage() {
    const [dice, setDice] = useState(dice_1);
    const [totalScore, setTotalScore] = useState(0);
    const [selectNum, setSelectNum] = useState(null);
    const [showarules, setShowRules] = useState(false);
    const [warning, setWarning] = useState(true);

    let btn = document.querySelectorAll('.select-num');
    btn.forEach((element) => {
        element.addEventListener('click', (e) => {
            for (let i = 0; i < btn.length; i++) {
                btn[i].style.backgroundColor = '#fff'
                btn[i].style.color = 'black'
            }
            setWarning(false);
            e.target.style.backgroundColor = 'black';
            e.target.style.color = '#fff';
        })
    })



    const diceRoll = function () {
        let diceValue = Math.floor(Math.random() * 6) + 1;
        switch (diceValue) {
            case 1:
                setDice(dice_1);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
            case 2:
                setDice(dice_2);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
            case 3:
                setDice(dice_3);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
            case 4:
                setDice(dice_4);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
            case 5:
                setDice(dice_5);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
            case 6:
                setDice(dice_6);
                if (selectNum === diceValue) { setTotalScore(totalScore + diceValue); } else { setTotalScore(totalScore - 2) }
                break;
        }
    }

    return (
        <div>
            <div className="container">
                <div className="frame1">
                    <div className="score">
                        <span className='count'>{totalScore}</span>
                        <p>Total score</p>
                    </div>
                    <div className="select-box">
                    {warning &&<h2 className='warning'>You have not selected any number</h2>}
                        <div className="buttons">
                            <span className="select-num" onClick={() => { setSelectNum(1); }}>1</span>
                            <span className="select-num" onClick={() => { setSelectNum(2); }}>2</span>
                            <span className="select-num" onClick={() => { setSelectNum(3); }}>3</span>
                            <span className="select-num" onClick={() => { setSelectNum(4); }}>4</span>
                            <span className="select-num" onClick={() => { setSelectNum(5); }}>5</span>
                            <span className="select-num" onClick={() => { setSelectNum(6); }}>6</span>
                        </div>
                        <p>Select Number</p>
                    </div>
                </div>
                <div className="frame2">
                    <div className="dice">
                        <img src={dice} alt="" onClick={diceRoll} />
                        <p>click on dice to roll</p>
                    </div>
                    <div className="dice-buttons">
                        <button className="reset btn" onClick={() => { setTotalScore(0) }}>Reset Score</button>
                        <button className="show-rules btn" onClick={() => { if (showarules == true) { setShowRules(false) } else { setShowRules(true) } }}>Show Rules</button>
                    </div>
                    {showarules && <div className="rules">
                        <h1>How to play dice game</h1>
                        <li>Select any number</li>
                        <li>Click on dice to roll</li>
                        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                        <li>if you get wrong guess then  2 point will be dedcuted </li>

                    </div>}
                </div>
            </div>
        </div>
    )
}
export default GamePage
