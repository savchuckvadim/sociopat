import style from './Start-Page.module.css'
import redLogo from '../../../assets/imgs/logo.svg'
import greyLogo from '../../../assets/imgs/grey-logo.svg'
import inscriptionLogog from '../../../assets/imgs/logo/Sociopath.svg'
import RedButton from '../Elements/Button/Red-Button'
import WhiteButton from '../Elements/Button/White-Button'
const StartPage = () => {

    return (
        <div className={style.start__page}>
            <div className={style.wrapper} >
                <div className={style.logo__wrapper}>
                    <img className={style.redLogo} src={redLogo} alt='img-logo' />
                    <img className={style.inscriptionLogog} src={inscriptionLogog} alt='inscription-logo' />
                </div>

                <div className={style.slogan__wrapper}>
                    <h1 className={style.slogan__title}>Become a Sociopath.</h1>
                    <h3 className={style.slogan__text}> and give a shit at all</h3>
                </div>

                <div className={style.buttons__wrapper}>
                    <div className={style.button__wrapper}> <RedButton   name={'Login'} /></div>
                
                    <div className={style.button__wrapper}><WhiteButton name={'Sign up'} /></div>

                    
                </div>
            </div>

            <img className={style.greyLogo} src={redLogo} alt='img-logo' />

        </div>
    )
}

export default StartPage