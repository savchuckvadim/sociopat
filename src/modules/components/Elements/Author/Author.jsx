import style from './Author.module.css'
import Icon from '../Icon'

const Author = (props) => {
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
                <Icon user={props.user} />
            </div>

            <div className={style.user__info}>
                <p className={style.name}
                    style={{
                        fontSize: fontSize
                    }}
                >
                  {props.userName}
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