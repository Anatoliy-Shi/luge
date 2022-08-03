import s from './History.module.css'

export const History = ({setVisible, setChecked}) => {
    const onVisible = () => {
        setVisible(false)
        setChecked(false)
    }
    return (
            <div
                onClick={onVisible}
                className={s.wrapper}>
                <p>History...</p>
            </div>
    )
}