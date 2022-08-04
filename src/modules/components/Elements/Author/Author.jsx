import style from './Author.module.css'

import Avatar from '../Avatar/Avatar'

const Author = (props) => {
    //props:
    //userId
    //size
    
    let link = false
    props.userId 
    ? link = `../../profile/${props.userId }`
    : link = false
    

    let fontSize = 14
    let iconSize = 48   
    let dateLineHeight = '22px'
    if (props.size === 56) {
        fontSize = 16
        iconSize = 56
        dateLineHeight = '24px'

    }
    
    return (

        <div className={style.user__wrapper}>
            <div className={style.icon__wrapper}
                style={{
                    width: iconSize,
                    height: iconSize
                }}
            >
               
                <Avatar
                size={iconSize}
                link={link}
                user={props.author}
                />
            </div>

            <div className={style.user__info}>
                <p className={style.name}
                    style={{
                        fontSize: fontSize
                    }}
                >
                  {props.author.profile.name +' '+ props.author.profile.surname}
                </p>
                <p className={style.date}
                style={{
                    lineHeight: dateLineHeight
                }}
                > 5 min ago</p>
            </div>

        </div>
    )
}

export default Author