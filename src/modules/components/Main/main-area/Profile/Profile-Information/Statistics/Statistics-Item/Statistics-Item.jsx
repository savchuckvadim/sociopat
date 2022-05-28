import style from './Statistics-Item.module.css'

const StatisticsItem = (props) => {

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