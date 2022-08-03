import s from './Docks.module.css'

export const Docks = ({setVisible}) => {
    const onVisible = () => {
        setVisible(false)
    }
    return (
        <div onClick={onVisible}
            className={s.wrapper}>
        <p>Docks..</p>
        </div>
    )
}