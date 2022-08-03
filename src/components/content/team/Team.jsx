import s from './Team.module.css'

export const Team = ({setVisible}) => {
    const onVisible = () => {
        setVisible(false)
    }
    return (
        <div onClick={onVisible}
             className={s.wrapper}>
            <img width='250' height='250' src='https://cdn-live.warthunder.com/uploads/cb/dd/9e/ae154502f77c291e2e03f9f9028178289e/%D0%B3%D0%BE%D0%BC%D0%B5%D1%80.jpg' alt="img"/>
        <p>Team...</p>
        </div>
    )
}