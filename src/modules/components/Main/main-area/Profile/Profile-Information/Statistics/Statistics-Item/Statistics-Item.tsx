import React from 'react'
import style from './Statistics-Item.module.scss'

type StatisticsItemType = {
    name: string
    quantity: number
}
const StatisticsItem: React.FC<StatisticsItemType> = (props) => {

    return (
        <>
            <div className={style.item}>
                <h3 className={style.quantity}>{props.quantity}</h3>
                <p className={style.name}>{props.name}</p>
            </div>

             {props.name !== 'following' && <div className={style.line}></div>}

        </>
    )
}

export default StatisticsItem