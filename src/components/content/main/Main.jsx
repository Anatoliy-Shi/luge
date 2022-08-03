import s from './Main.module.css'

export const Main = ({setVisible}) => {
    const onVisible = () => {
        setVisible(false)
    }
    return (
        <div onClick={onVisible}>
        <div className={s.wrapper} >
            <h3 className={s.title}>Новость 1</h3>
            <div className={s.content}>
                <p className={s.textContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut, cumque cupiditate dicta
                    facilis fugit illo incidunt inventore quas rem, repellat repellendus reprehenderit saepe, sed soluta
                    tempora totam vitae? Ab amet blanditiis commodi consequuntur delectus deserunt eius excepturi iusto
                    nostrum omnis optio perferendis quisquam, sequi vel veniam veritatis voluptas.</p>
                <img src="https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="img"/>
            </div>
            <h3 className={s.title}>Новость 1</h3>
            <div className={s.content}>
                <p className={s.textContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut, cumque cupiditate dicta
                    facilis fugit illo incidunt inventore quas rem, repellat repellendus reprehenderit saepe, sed soluta
                    tempora totam vitae? Ab amet blanditiis commodi consequuntur delectus deserunt eius excepturi iusto
                    nostrum omnis optio perferendis quisquam, sequi vel veniam veritatis voluptas.</p>
                <img src="https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="img"/>
            </div>
            <h3 className={s.title}>Новость 1</h3>
            <div className={s.content}>
                <p className={s.textContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut, cumque cupiditate dicta
                    facilis fugit illo incidunt inventore quas rem, repellat repellendus reprehenderit saepe, sed soluta
                    tempora totam vitae? Ab amet blanditiis commodi consequuntur delectus deserunt eius excepturi iusto
                    nostrum omnis optio perferendis quisquam, sequi vel veniam veritatis voluptas.</p>
                <img src="https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="img"/>
            </div>
            <h3 className={s.title}>Новость 1</h3>
            <div className={s.content}>
                <p className={s.textContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut, cumque cupiditate dicta
                    facilis fugit illo incidunt inventore quas rem, repellat repellendus reprehenderit saepe, sed soluta
                    tempora totam vitae? Ab amet blanditiis commodi consequuntur delectus deserunt eius excepturi iusto
                    nostrum omnis optio perferendis quisquam, sequi vel veniam veritatis voluptas.</p>
                <img src="https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="img"/>
            </div>
            <h3 className={s.title}>Новость 1</h3>
            <div className={s.content}>
                <p className={s.textContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut, cumque cupiditate dicta
                    facilis fugit illo incidunt inventore quas rem, repellat repellendus reprehenderit saepe, sed soluta
                    tempora totam vitae? Ab amet blanditiis commodi consequuntur delectus deserunt eius excepturi iusto
                    nostrum omnis optio perferendis quisquam, sequi vel veniam veritatis voluptas.</p>
                <img src="https://imgholder.ru/200x150/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="img"/>
            </div>
            <div className={s.loadMore}>загрузить еще</div>
        </div>
        </div>
    )
}