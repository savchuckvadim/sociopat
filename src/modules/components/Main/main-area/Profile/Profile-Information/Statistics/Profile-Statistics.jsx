import { useState } from 'react'
import style from './Profile-Statistics.module.css'
import StatisticsItem from './Statistics-Item/Statistics-Item'

const ProfileStatistics = (props) => {
    
const followers = props.followers.length
const followeds = props.followeds.length   
const postsCount=props.postsCount 
const statistics =
    [
        {
            name: 'posts',
            quantity: postsCount
        },
        {
            name: 'followers',
            quantity: followers
        },
        {
            name: 'following',
            quantity: followeds
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