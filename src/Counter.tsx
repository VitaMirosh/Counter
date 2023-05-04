import React from "react";

type PropsType = {
    incCounterHandler: () => void,
    resentCounterHandler: () => void,
    textValue:string,
    counter:number,
    startValue:number
    maxValue:number
}

export function Counter(props: PropsType) {


    return (
        <div>
            <h1>{props.textValue === '' ? props.counter : props.textValue}</h1>
            <button  onClick={props.incCounterHandler} disabled={props.counter === props.maxValue || props.startValue >= props.maxValue || props.maxValue < 0 || props.startValue < 0 }>inc</button>
            <button  onClick={props.resentCounterHandler} disabled={props.counter === 0 || props.startValue === props.counter}>reset</button>
        </div>
    )
}