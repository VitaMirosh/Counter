import React from "react";
import s from './Counter.module.css'

type PropsType = {
    incCounterHandler: () => void,
    resentCounterHandler: () => void,
    textValue:string,
    counter:number,
    startValue:number
    maxValue:number
}

export function Counter(props: PropsType) {

const disabledButton1 = props.counter === props.maxValue || props.startValue >= props.maxValue || props.maxValue < 0 || props.startValue < 0?s.disable:s.button
const disabledButton2 =props.counter === 0 || props.startValue === props.counter?s.disable:s.button
const displeyError = (props.counter === props.maxValue || props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0 )?s.displayNan:s.display
    return (
        <div className={s.counter}>
            <h1 className={displeyError}>{props.textValue === '' ? props.counter : props.textValue}</h1>
            <div className={s.buttons}>
                <button className={disabledButton1} onClick={props.incCounterHandler} disabled= {props.counter === props.maxValue || props.startValue >= props.maxValue || props.maxValue < 0 || props.startValue < 0}>inc</button>
                <button className={disabledButton2} onClick={props.resentCounterHandler} disabled={props.counter === 0 || props.startValue === props.counter}>reset</button>
            </div>
        </div>
    )
}