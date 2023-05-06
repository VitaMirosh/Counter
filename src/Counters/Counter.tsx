import s from './Counter.module.css'

type PropsType = {
    incCounterHandler: () => void,
    resentCounterHandler: () => void,
    textValue: string,
    counter: number,
    startValue: number,
    maxValue: number,
    disButton:boolean
}

export function Counter(props: PropsType) {




    const disabledButton1 =props.disButton || props.counter === props.maxValue ? s.disable : s.button
    const disabledButton2 = props.disButton || props.counter === props.startValue ? s.disable : s.button
    const displeyError = (props.counter === props.maxValue || props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0) ? s.displayNan : s.display
    return (
        <div className={s.counter}>
            <h1 className={displeyError}>{props.textValue === '' ? props.counter : props.textValue}</h1>
            <div className={s.buttons}>
                <button className={disabledButton1} onClick={props.incCounterHandler}
                        disabled={props.disButton}>inc
                </button>
                <button className={disabledButton2} onClick={props.resentCounterHandler}
                        disabled={props.disButton}>reset
                </button>
            </div>
        </div>
    )
}