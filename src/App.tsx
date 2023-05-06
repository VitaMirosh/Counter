import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counters/Counter";
import {ValueCounter} from "./ValuesCounters/ValueCounnter";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxvalue] = useState<number>(1)
    const [counter, setCounter] = useState<number>(startValue)
    const [textValue, setTextValue] = useState<string>("")
    const [disButton, setDisButton] = useState(true)

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
    }, [startValue, maxValue, counter])

    let strString = localStorage.getItem('valueSt')
    let maxString = localStorage.getItem('valueMax')
    let coun = localStorage.getItem('count')

    useEffect(() => {
        if (strString) {
            setStartValue(JSON.parse(strString))
        }
        if (maxString) {
            setMaxvalue(JSON.parse(maxString))
        }
        if (coun) {
            setTextValue('')
            setCounter(JSON.parse(coun))
        }
        setDisButton(false)
    }, [])


    const resentCounterHandler = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        if (maxValue === 1 && startValue === 0) {
            
        } else {
            if ((startValue >= maxValue) || (startValue < 0) || (maxValue < 0)) {
                setTextValue('Incorrect value')
            }
        }
    }, [startValue, maxValue])


    return (
        <div className="App">
            <div>
                <Counter
                    textValue={textValue}
                    counter={counter}
                    incCounterHandler={incCounterHandler}
                    resentCounterHandler={resentCounterHandler}
                    startValue={startValue}
                    maxValue={maxValue}
                    disButton={disButton}
                />
            </div>
            <div>
                <ValueCounter
                    startValue={startValue}
                    maxValue={maxValue}
                    setStartValue={setStartValue}
                    setMaxvalue={setMaxvalue}
                    setCounter={setCounter}
                    setTextValue={setTextValue}
                    counter={counter}
                    setDisButton={setDisButton}
                />
            </div>
        </div>
    );
}

export default App;
