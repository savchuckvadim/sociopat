import style from './Light-Loading-Page.module.scss'
import dark from './Dark-Loading-Page.module.css'
import redLogo from '../../../../assets/imgs/logo.svg'

const LoadingPage = (props) => {
    let logo = !props.isComponent ? props.style.logo : redLogo
    return (
        <div className={style.wrapper} style={props.style}>
            <img className={!props.isComponent ? style.logo : style.logoMiini}
                src={logo} alt="logo" />
            <p className={style.text}>Loading...</p>
        </div>
    )
}
export default LoadingPage