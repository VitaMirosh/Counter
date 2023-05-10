import React from 'react';
import {Counter} from "../Counters/Counter";
import {ValueCounter} from "../ValuesCounters/ValueCounnter";
type SimpleType ={
    textValue:string,
    counter:number,
    incCounterHandler:()=>void,
    resentCounterHandler:()=>void,
    startValue:number,
    maxValue:number,
    disButton:boolean,
    setStartValue:(value:number)=>void,
    setMaxvalue:(star:number)=>void,
    setCounter:(counter:number)=>void,
    setTextValue:(text:string)=>void,
    setDisButton:(dis:boolean)=>void


}
export const SimpleCounter = (props:SimpleType) => {


    return (
        <div className={'counter'}>
            <Counter
                textValue={props.textValue}
                counter={props.counter}
                incCounterHandler={props.incCounterHandler}
                resentCounterHandler={props.resentCounterHandler}
                startValue={props.startValue}
                maxValue={props.maxValue}
                disButton={props.disButton}
            />
            <ValueCounter
                startValue={props.startValue}
                maxValue={props.maxValue}
                setStartValue={props.setStartValue}
                setMaxvalue={props.setMaxvalue}
                setCounter={props.setCounter}
                setTextValue={props.setTextValue}
                counter={props.counter}
                setDisButton={props.setDisButton}
            />
        </div>
    );
};

