import {ChangeEvent} from "react";
import s from './ValueCounters.module.css'

type GetPropsType = {
    startValue: number,
    maxValue: number,
    setCounter: (count: number) => void
    setStartValue: (startValue: number) => void,
    setMaxvalue: (maxValue: number) => void,
    setTextValue: (text: string) => void
    counter: number
}

export function ValueCounter(props: GetPropsType) {

    const inputHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value);
    }
    const inputHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxvalue(+e.currentTarget.value);
    }
    const newValue = () => {
        if (props.startValue < props.maxValue) {
            props.setCounter(props.startValue)
            props.setTextValue('');
        }

    }
    const buttonDisabled = (props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0 || props.startValue === props.counter) ? s.disabled : s.button
   const inputError = (props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0 )?s.inputError:s.inputValue
    return (
        <div className={s.counter}>
            <div className={s.pInputs}>
                <p>start value: <input className={inputError} value={props.startValue} type={'number'} min={'-10'}
                                       max={''} onChange={inputHandler1}/></p>
                <p>max value: <input className={inputError} value={props.maxValue} type={'number'} min={'-10'}
                                     max={''} onChange={inputHandler2}/></p>
            </div>
            <div className={s.buttons}>
                <button className={buttonDisabled} onClick={newValue}
                        disabled={props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0}>set
                </button>
            </div>
        </div>
    )
}