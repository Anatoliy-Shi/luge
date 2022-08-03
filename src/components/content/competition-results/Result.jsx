import s from './Result.module.css'

export const Result = ({setVisible}) => {

    const onVisible = () => {
        setVisible(false)
    }

    return (
        <div
            onClick={onVisible}
            className={s.wrapper}>
        <p>Result</p>
        </div>
    )
}