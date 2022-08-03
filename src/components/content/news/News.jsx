// import s from './News.module.css'
// import NEWS from "../../../News";

import s from "../documents/Docks.module.css";

const data = [
    {
        "id": "2",
        "title": "fasdf",
        "src": "logo.jpg",
    },
    {
        "id": "3",
        "title": "iuyt",
        "src": "bgc.png",
    },
]

export const News = ({setVisible, setChecked}) => {
    const onVisible = () => {
        setVisible(false)
        setChecked(false)
    }

    return (
 <div
     className={s.wrapper}
     onClick={onVisible}>
            {data.map(el => {
                return <img src={require("./../../../asset/" + el.src)}
                            width={100}
                            height={100}
                            alt={el.title}
                            key={el.id}/>
            })}
            <p>News...</p>
        </div>

    )
}