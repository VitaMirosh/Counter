import {ChangeEvent, useEffect, useState} from "react";
import s from './ValueCounters.module.css'

type GetPropsType = {
    startValue: number,
    maxValue: number,
    setCounter: (count: number) => void
    setStartValue: (startValue: number) => void,
    setMaxvalue: (maxValue: number) => void,
    setTextValue: (text: string) => void
    counter: number
    valueType: string
    setDisButton: (dis: boolean) => void
}

export function ValueCounter(props: GetPropsType) {
    const [disBut, setDisBut] = useState(true)

    useEffect(() => {
        localStorage.setItem("disabledBut", JSON.stringify(disBut))
    }, [disBut])
    let disabledBatton = localStorage.getItem("disabledBut")

    useEffect(() => {
        if (disabledBatton) {
            setDisBut(JSON.parse(disabledBatton))
        }
    }, [])

    const inputHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = e.currentTarget.value;
        props.setStartValue(+newV);
        setDisBut(false)
        props.setDisButton(true);
        if (!(+newV >= props.maxValue || +newV < 0 || props.maxValue < 0)) {
            props.setTextValue('set')
        }
    }
    const inputHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        let newV = e.currentTarget.value;
        props.setMaxvalue(+newV);
        setDisBut(false)
        props.setDisButton(true);
        if (!(props.startValue >= +newV || props.startValue < 0 || +newV < 0)) {
            props.setTextValue('set')
        }
    }
    const newValue = () => {
        if (props.startValue < props.maxValue) {
            props.setCounter(props.startValue)
            props.setTextValue('');
            setDisBut(true)
            props.setDisButton(false)
        }
    }


    const buttonDisabled = disBut ? s.disabled : s.button
    const inputError = (props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0) ? s.inputError : s.inputValue
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
                        disabled={disBut ? props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0 : false}>set
                </button>
            </div>
        </div>
    )
}