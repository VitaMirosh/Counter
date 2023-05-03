import {ChangeEvent} from "react";

type GetPropsType = {
    startValue: number,
    maxValue: number,
    setCounter: (count: number) => void
    setStartValue: (startValue: number) => void,
    setMaxvalue: (maxValue: number) => void,
    setTextValue:(text:string)=>void
}

export function ValueCounter(props: GetPropsType) {

    const inputHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value);
    }
    const inputHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxvalue(+e.currentTarget.value);
    }
    const newValue = () => {
        props.setCounter(props.startValue)
        props.setTextValue('');
    }
    return (
        <div>
            <p>start value: <input value={props.startValue} type={'number'} min={'0'} max={''} onChange={inputHandler1}/></p>
            <p>max value:<input value={props.maxValue} type={'number'} min={'0'} max={''} onChange={inputHandler2}/></p>
            <button  onClick={newValue} >set</button>
        </div>
    )
}