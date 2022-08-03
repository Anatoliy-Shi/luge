import s from './Docks.module.css'

export const Docks = ({setVisible, setChecked}) => {
    const onVisible = () => {
        setVisible(false)
        setChecked(false)
    }
    return (
        <div onClick={onVisible}
            className={s.wrapper}>
        <p>Docks..</p>
        </div>
    )
}