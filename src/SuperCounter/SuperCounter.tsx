import {Counter} from "../Components/Counters/Counter";
import React, {useState} from "react";
import {ValueCounter} from "../Components/ValuesCounters/ValueCounnter";
import {SimpleCounter} from "../Components/SimpleCounter/SimpleCounter";

type SuperCounter = {
    textValue: string,
    counter: number,
    incCounterHandler: () => void,
    resentCounterHandler: () => void,
    startValue: number,
    maxValue: number,
    disButton: boolean,
    setStartValue: (value: number) => void,
    setMaxvalue: (star: number) => void,
    setCounter: (counter: number) => void,
    setTextValue: (text: string) => void,
    setDisButton: (dis: boolean) => void,

}

export function SuperCounter(props: SuperCounter) {

    const [setting, setSetting] = useState<boolean>(true)

    return (
        <>
            {setting
                ? <Counter
                    textValue={props.textValue}
                    counter={props.counter}
                    incCounterHandler={props.incCounterHandler}
                    resentCounterHandler={props.resentCounterHandler}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    disButton={props.disButton}
                    setting={setting}
                    setSetting={setSetting}
                />
                : <ValueCounter
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxvalue={props.setMaxvalue}
                    setCounter={props.setCounter}
                    setTextValue={props.setTextValue}
                    counter={props.counter}
                    setDisButton={props.setDisButton}

                />

            }
        </>
    )


}