import style from './Light-Loading-Page.module.css'
import dark from './Dark-Loading-Page.module.css'

const LoadingPage = (props) => {
    
    if (props.type === 'dark') {
        return (
            <div className={dark.wrapper} style={props.style}>
                <div className={dark.logo}>
                    <img className={dark.logo} src={props.style.logo} alt="logo" />
                </div>

                <p className={dark.text}>Loading...</p>
            </div>
        )
    }
    return (
        <div className={style.wrapper} style={props.style}>
            <img className={style.logo} src={props.style.logo} alt="logo" />
            <p className={style.text}>Loading...</p>
        </div>
    )
}
export default LoadingPage