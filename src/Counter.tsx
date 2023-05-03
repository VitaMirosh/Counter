import React from "react";

type PropsType = {
    incCounterHandler: () => void,
    resentCounterHandler: () => void,
    textValue:string,
    counter:number
}

export function Counter(props: PropsType) {


    return (
        <div>
            <h1>{props.textValue === '' ? props.counter : props.textValue}</h1>
            <button  onClick={props.incCounterHandler}>inc</button>
            <button  onClick={props.resentCounterHandler}>reset</button>
        </div>
    )
}