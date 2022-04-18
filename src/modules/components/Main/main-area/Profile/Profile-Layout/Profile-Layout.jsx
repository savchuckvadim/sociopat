import style from './Profile-Layout.module.css'
import hero from '../../../../../../assets/Vector.png'
const ProfileLayoute = () => {

    return (
        <div className={style.container}>
            <div className={style.frame}>
                <div className={style.hero__container}>
                <img className={style.hero} src={hero} alt='hero' />
                </div>
                
                <div className={style.information}>

                </div>
                <div className={style.avatar}>
                   <h1 className={style.initials}>CW</h1> 
                </div>
            </div>
        </div>

    )
};

export default ProfileLayoute