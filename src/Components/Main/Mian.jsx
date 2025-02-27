import style from "./main.module.css"
import cardsData from "../../Data/entertainmentCards.json"


export default function Main (){



    return <main className={style.main}>
        <div className={style.container}>
            <h1>Идеи для развлечений!</h1>

            <div className={style.filter}>
                Фильтр
            </div>

            <div className={style.cardsContainer}>
                <ul className={style.cards}>
                    {cardsData.map((item, index) =>{
                        return(
                        <li key={index} className={style.cardItem}>
                            <article className={style.card}>
                                <img className={style.cardImg} src="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?w=1200&ssl=1" alt="placeholder"/>
                                <div className={style.cardContent}>
                                    <h3 className={style.cardTitle}>{item.title}</h3>
                                    <p className={style.cardDesc}>{item.description}</p>
                                    <div className={style.cardFooter}>  
                                        <p className={style.cardCategory}>{item.category}</p>
                                        <div className={style.cardPrice}>{item.price}</div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )
                    })}
                </ul>
            </div>

        </div>
    </main>
}