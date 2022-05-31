import style from './Background.module.css'
import redLogo from '../../../../assets/imgs/logo.svg'
import greyLogo from '../../../../assets/imgs/grey-logo.svg'
const Background = (props) => {
let logo = greyLogo
    props.dark 
    ? logo = redLogo 
    : logo = greyLogo
    return(
        <div className={style.cover}
            style={{
                backgroundImage:`url(${logo})`
            }}
            ></div>
    )
}

export default Background