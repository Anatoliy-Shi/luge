import s from './Result.module.css'

export const Result = ({setVisible, setChecked}) => {

    const onVisible = () => {
        setVisible(false)
        setChecked(false)
    }

    return (
        <div
            onClick={onVisible}
            className={s.wrapper}>
        <p>Result</p>
        </div>
    )
}