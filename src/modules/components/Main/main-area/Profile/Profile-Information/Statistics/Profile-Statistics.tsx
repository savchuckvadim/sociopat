import React, { useState } from 'react'
import style from './Profile-Statistics.module.css'
import StatisticsItem from './Statistics-Item/Statistics-Item'

type ProfileStatisticsType = {
    followers: number
    followeds: number
    postsCount: number
}
const ProfileStatistics: React.FC<ProfileStatisticsType> = ({
    followers,
    followeds,
    postsCount
}) => {

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

    let items = statistics.map((item, index) => (<StatisticsItem key={index} name={item.name} quantity={item.quantity} />))
    return (
        <div className={style.wrapper}>
            {items}
        </div>
    )
}

export default ProfileStatistics