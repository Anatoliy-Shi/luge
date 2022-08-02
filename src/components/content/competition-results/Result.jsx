import s from './Result.module.css'

export const Result = ({setVisible, visible}) => {
    return (
        <div
            onClick={()=> setVisible(!visible)}
            className={s.wrapper}>
        <p>Result</p>
        </div>
    )
}