import {ChangeEvent} from "react";

type GetPropsType = {
    startValue: number,
    maxValue: number,
    setCounter: (count: number) => void
    setStartValue: (startValue: number) => void,
    setMaxvalue: (maxValue: number) => void,
    setTextValue:(text:string)=>void
    counter:number
}

export function ValueCounter(props: GetPropsType) {

    const inputHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value);
    }
    const inputHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxvalue(+e.currentTarget.value);
    }
    const newValue = () => {
        if(props.startValue < props.maxValue){
            props.setCounter(props.startValue)
            props.setTextValue('');
        }

    }
    return (
        <div>
            <p>start value: <input value={props.startValue} type={'number'} min={'-10'} max={''} onChange={inputHandler1}/></p>
            <p>max value:<input value={props.maxValue} type={'number'} min={'-10'} max={''} onChange={inputHandler2}/></p>
            <button onClick={newValue} disabled={props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0 }>set</button>
        </div>
    )
}