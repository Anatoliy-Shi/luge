import s from './History.module.css'

export const History = ({setVisible}) => {
    const onVisible = () => {
        setVisible(false)

    }
    return (
            <div
                onClick={onVisible}
                className={s.wrapper}>
                <p>History...</p>
            </div>
    )
}