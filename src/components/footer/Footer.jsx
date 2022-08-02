import s from './Footer.module.css'

export const Footer = ({blur, visible}) => {
    return (
        <div
            style={visible ? blur : null}
            className={s.footer}>
            <div>Инн: 9715422102</div>
            <div>Юридический адрес: 127273, Г Москва, вн.тер.г. Муниципальный Округ Отрадное, ул Отрадная, д. 14А, кв.
                30
            </div>
            <div>Телефон: +7900000000</div>
            <div>Фактический адрес: Lorem ipsum dolor sit amet</div>
        </div>

    )
}