import { NavLink } from 'react-router-dom'
import style from './Form-Card.module.css'
import Form from './Form/Form'

const FormCard = (props) => {
    let type = props.type
    return (
        <div className={style.wrapper}>
            <div className={style.form__title}>
                <h1>
                    {props.title}
                </h1>
                <p>{props.instruction}</p>
            </div>

            <div className={style.form__container}>

                {/* <RegistartionReduxForm onSubmit={submit}/> */}
                {/* <LoginReduxForm onSubmit={submit}/> */}
                <Form {...props}/>

                <div className={style.form__footer}>
                    <div className={style.description}>
                        {type === 'registration'
                            ? props.privacy
                            : ''
                        }
                        {/* By pressing Sign Up, you agree to the Terms of Service and Privacy Policy. */}
                    </div>
                    <div className={style.line}>
                        <hr ></hr>
                    </div>
                    <div className={style.link__container}>
                        <p>
                            {props.footerInstruction}
                            <NavLink className={style.link} to={`profile`} activeclassname='active'>
                                {props.footerLink}
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard 