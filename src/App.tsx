import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperCounter} from "./SuperCounter/SuperCounter";
import {SimpleCounter} from "./Components/SimpleCounter/SimpleCounter";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxvalue] = useState<number>(1)
    const [counter, setCounter] = useState<number>(startValue)
    const [textValue, setTextValue] = useState<string>('')
    const [disButton, setDisButton] = useState(true)
    const [switchButton, setSwitchButton] = useState(true)

    const incCounterHandler = () => {
        if (counter !== maxValue) {
            setCounter(counter + 1)
            setDisButton(false)
        }
    }
    useEffect(() => {
        localStorage.setItem('valueSt', JSON.stringify(startValue))
        localStorage.setItem('valueMax', JSON.stringify(maxValue))
        localStorage.setItem('count', JSON.stringify(counter))
        localStorage.setItem('text', textValue)
        localStorage.setItem('dis', JSON.stringify(disButton))
        localStorage.setItem('switchOn',JSON.stringify(switchButton))


        if (maxValue === 1 && startValue === 0) {
            setTextValue('')
        } else {
            if ((startValue >= maxValue) || (startValue < 0) || (maxValue < 0)) {
                setTextValue('Incorrect value')
            }
        }

    }, [startValue, maxValue, counter, textValue, disButton,switchButton])


    let strString = localStorage.getItem('valueSt')
    let maxString = localStorage.getItem('valueMax')
    let coun = localStorage.getItem('count')
    let t = localStorage.getItem('text')
    let disBut = localStorage.getItem('dis')
    let switchCount=localStorage.getItem('switchOn')

    useEffect(() => {
        if (strString) {
            setStartValue(JSON.parse(strString))
        }
        if (maxString) {
            setMaxvalue(JSON.parse(maxString))
        }
        if (coun) {
            setCounter(JSON.parse(coun))
        }
        if (t) {
            setTextValue(t)
        }
        if (disBut) {
            setDisButton(JSON.parse(disBut))
        }
        if(switchCount){
            setSwitchButton(JSON.parse(switchCount))
        }
    }, [])


    const resentCounterHandler = () => {
        setCounter(startValue)
    }


    const click = () => {
        if (switchButton) {
            setSwitchButton(false)
        }else{
            setSwitchButton(true)
        }
    }


    return (
        <div className="App">
            <button className={'button'} onClick={click}>Click</button>
           {switchButton ?
                <SimpleCounter
                    textValue={textValue}
                    counter={counter}
                    incCounterHandler={incCounterHandler}
                    resentCounterHandler={resentCounterHandler}
                    startValue={startValue}
                    maxValue={maxValue}
                    disButton={disButton}
                    setStartValue={setStartValue}
                    setMaxvalue={setMaxvalue}
                    setCounter={setCounter}
                    setTextValue={setTextValue}
                    setDisButton={setDisButton}

                /> :
                <SuperCounter
                    textValue={textValue}
                    counter={counter}
                    incCounterHandler={incCounterHandler}
                    resentCounterHandler={resentCounterHandler}
                    startValue={startValue}
                    maxValue={maxValue}
                    disButton={disButton}
                    setStartValue={setStartValue}
                    setMaxvalue={setMaxvalue}
                    setCounter={setCounter}
                    setTextValue={setTextValue}
                    setDisButton={setDisButton}

                />
            }
        </div>
    );
}

export default App;
