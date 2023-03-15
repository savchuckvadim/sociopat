import style from './Day.module.css'
import Moment from 'react-moment'

const Day = ({date}) => {

    let myDate = new Date(date)
    // let day = myDate.getDate()
    const calendarStrings = {
        lastDay : '[Yesterday]',
        sameDay : '[Today]',
        // nextDay : '[Tomorrow at] LT',
        // lastWeek : '[last] dddd [at] LT',
        // nextWeek : 'dddd [at] LT',
        sameElse : 'dddd [at] LT'
    };

    return (
        <div className={style.wrapper}>
            <div className={style.label}>
               {/* <p className={style.day}>{<Moment className={style.day} fromNow>{myDate}</Moment>}</p>  */}
               <Moment className={style.day} calendar={calendarStrings}>{myDate}</Moment>
            </div>
        </div>
    )

}

export default Day