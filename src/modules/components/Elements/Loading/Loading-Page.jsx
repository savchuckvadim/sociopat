import style from './Light-Loading-Page.module.css'
import dark from './Dark-Loading-Page.module.css'

const LoadingPage = (props) => {
   
    if (props.type === 'dark') {
        return (
            <div className={dark.container} style={props.style}>
                <img className={dark.logo} src={props.style.logo} alt="logo" />
                <p className={dark.text}>Loading...</p>
            </div>
        )
    }
    return (
        <div className={style.container} style={props.style}>
            <img className={style.logo} src={props.style.logo} alt="logo" />
            <p className={style.text}>Loading...</p>
        </div>
    )
}
export default LoadingPage