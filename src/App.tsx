import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {ValueCounter} from "./ValueCounnter";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxvalue] = useState<number>(1)
    const [counter, setCounter] = useState<number>(startValue)
    const [textValue, setTextValue] = useState<string>("")


    let incCounterHandler = () => {
        if (counter !== maxValue) {
            setCounter(counter + 1)
        }

    }

    let resentCounterHandler = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        if (maxValue === 1 && startValue === 0) {
            setTextValue('0')
        } else {
            if ((startValue >= maxValue) || (startValue && maxValue < 0)) {
                setTextValue('Incorrect value')
            } else {
                setTextValue('enter values and press "set')
            }

        }
    }, [startValue, maxValue])


    return (
        <div className="App">
            <Counter
                textValue={textValue}
                counter={counter}
                incCounterHandler={incCounterHandler}
                resentCounterHandler={resentCounterHandler}
            />
            <ValueCounter
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxvalue={setMaxvalue}
                setCounter={setCounter}
                setTextValue={setTextValue}

            />


        </div>
    );
}

export default App;
