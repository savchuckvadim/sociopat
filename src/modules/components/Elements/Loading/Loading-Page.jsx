import style from './Light-Loading-Page.module.scss'
import dark from './Dark-Loading-Page.module.css'
import redLogo from '../../../../assets/imgs/logo.svg'

const LoadingPage = (props) => {
    let logo = !props.isComponent ? props.style.logo : redLogo
    return (
        <div className={style.wrapper} style={props.style}>
            <img className={!props.isComponent ? style.logo : style.logoMini}
                src={logo} alt="logo" />
           {!props.isComponent && <p className={style.text}>Loading...</p>}
        </div>
    )
}
export default LoadingPage