import s from './Docks.module.css'

export const Docks = ({setVisible, visible}) => {
    return (
        <div onClick={()=> setVisible(!visible)}
            className={s.wrapper}>
        <p>Docks..</p>
        </div>
    )
}