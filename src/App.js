import React from "react";
import { useState } from "react";
import './App.css';
import Button from "./Button";

const App = () => {
    
    const [disp, setDisp] = useState('0');

    function changeDisp(val) {
        if(disp==='0') setDisp(val);
        else if(disp.length >= 21) return;
        else setDisp(disp+val);
    }

    function clearButton() {
        if(disp === '0') return;

        const s1 = disp.slice(0,-1);
        setDisp(s1);
    }
    function allClearButton() {
        if(disp === '0') return ;
        setDisp('0');
    }
    function submitButton() {
        setDisp(eval(disp));
    }
    
    
    return (
        
        <div className="main-div">
            <div className="calc" id="calc">
                <div className="display">
                    <input type="text" className="form-control" name="display_screen" placeholder="0" value={disp}></input>
                </div>
                <div className="d-flex justify-content-between" >
                    <Button value={7} handleClick={()=>changeDisp('7')}/>
                    <Button value={8} handleClick={()=>changeDisp('8')}/>
                    <Button value={9} handleClick={()=>changeDisp('9')}/>
                    <Button value={'AC'} handleClick={()=>allClearButton()}/>
                </div>
                <div className="d-flex justify-content-between" >
                    <Button value={4} handleClick={()=>changeDisp('4')}/>
                    <Button value={5} handleClick={()=>changeDisp('5')}/>
                    <Button value={6} handleClick={()=>changeDisp('6')}/>
                    <Button value={'C'} handleClick={()=>clearButton()}/>
                </div>
                <div className="d-flex justify-content-between" >
                    <Button value={1} handleClick={()=>changeDisp('1')}/>
                    <Button value={2} handleClick={()=>changeDisp('2')}/>
                    <Button value={3} handleClick={()=>changeDisp('3')}/>
                    <Button value={'*'} handleClick={()=>changeDisp('*')}/>
                </div>
                <div className="d-flex justify-content-between" >
                    <Button value={0} handleClick={()=>changeDisp('0')}/>
                    <Button value={'+'} handleClick={()=>changeDisp('+')}/>
                    <Button value={'-'} handleClick={()=>changeDisp('-')}/>
                    <Button value={'/'} handleClick={()=>changeDisp('/')}/>
                </div>
                <div className="d-flex justify-content-between" >
                    <Button value={'='} id="eqlbtn" handleClick={()=>submitButton()}/>
                    
                </div>
            </div>
        </div>
        
        
    );
}

export default App;