import { useState } from 'react'
import style from './Profile-Statistics.module.css'
import StatisticsItem from './Statistics-Item/Statistics-Item'

const ProfileStatistics = () => {
const statistics =
    [
        {
            name: 'posts',
            quantity: 4
        },
        {
            name: 'followers',
            quantity: 45
        },
        {
            name: 'following',
            quantity: 56
        }
    ]

let items = statistics.map((item, index) => (<StatisticsItem key={index} name={item.name} quantity={item.quantity}/>))
    return (
        <div className={style.wrapper}>
            {items}
        </div>
    )
}

export default ProfileStatistics