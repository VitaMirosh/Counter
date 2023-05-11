import {Counter} from "../Components/Counters/Counter";
import React, {useEffect, useState} from "react";
import {ValueCounter} from "../Components/ValuesCounters/ValueCounnter";
import s from './SuperCount.module.css'

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
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(setting))
    }, [setting])

    let settingsNew = localStorage.getItem('settings')

    useEffect(() => {
        if (settingsNew) {
            setSetting(JSON.parse(settingsNew))
        }

    }, [])
    return (
        <div className={s.super}>
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
                    setSetting={setSetting}

                />

            }
        </div>
    )


}