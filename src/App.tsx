import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counters/Counter";
import {ValueCounter} from "./ValuesCounters/ValueCounnter";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxvalue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(startValue)
    const [textValue, setTextValue] = useState<string>("")


    const incCounterHandler = () => {
        if (counter !== maxValue) {
            setCounter(counter + 1)
        }
    }
    const resentCounterHandler = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        if (maxValue === 5 && startValue === 0) {
            setTextValue('')
        } else {
            if ((startValue >= maxValue) || (startValue  < 0) || (maxValue < 0)) {
                setTextValue('Incorrect value')
            } else if ((startValue < maxValue)){
                setTextValue('enter values and press "set')
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
                />
            </div>
        </div>
    );
}

export default App;
