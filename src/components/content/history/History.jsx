import s from './History.module.css'

export const History = ({setVisible, visible}) => {
    return (
            <div
                onClick={()=> setVisible(!visible)}
                className={s.wrapper}>
                <p>History...</p>
            </div>
    )
}