// import React from 'react'
// import { Navigate, NavLink } from 'react-router-dom'
// import { FieldType } from '../../../../redux/reducers/login-registaration/login-registration-reducer'
// import { LoginPropsType } from '../Login-Container'
// import { RegistrationPropsType } from '../Registration-Container'
// import style from './Form-Card.module.css'
// import Form from './Form/Form'

// export type FormCardPropsType = LoginPropsType & RegistrationPropsType
// type FieldsValuesType = {
//     name: string, surname: string, email: string, password: string, repeatPassword: string
// }
// export type onSubmitType = (values: FieldsValuesType) => void

// const FormCard: React.FC<FormCardPropsType> = (props) => {
//     let type = props.type
//     const onSubmit = (values: FieldsValuesType) => {

//         switch (props.type) {
//             case 'login':

//                 props.login(values.email, values.password)
//                 // return <Navigate replace to='/hbvhk' />
//                 break

//             case 'registration':

//                 props.setNewUser(values.name, values.surname, values.email, values.password, values.repeatPassword)
//                 break
//             default:
//                 break
//         }

//     }

//     if (props.isAuth) { return <Navigate replace to='../profile' /> }
//     return (
//         <div className={style.wrapper}>

//             <div className={style.form__title}>
//                 <h1>
//                     {props.title}
//                 </h1>
//                 <p>{props.error
//                     ? <span className={style.error}>{props.error}</span>
//                     : props.instruction}</p>
//             </div>

//             <div className={style.form__container}>

//                 {/* <RegistartionReduxForm onSubmit={submit}/> */}
//                 {/* <LoginReduxForm onSubmit={submit}/> */}


//                 <Form
//                     // {...props} onSubmit={onSubmit} 
//                     onSubmit={onSubmit}
//                     setError={props.setError}
//                     login={props.login}
//                     error={props.error}
//                     fields={props.fields}
//                 />

//                 <div className={style.form__footer}>
//                     <div className={style.description}>
//                         {type === 'registration'
//                             ? props.privacy
//                             // @ts-ignore
//                             : <NavLink className={style.link} to={`profile`} activeclassname='active'>{props.forgotLink}</NavLink>
//                         }
//                         {/* By pressing Sign Up, you agree to the Terms of Service and Privacy Policy. */}
//                     </div>
//                     <div className={style.line__wrapper}>
//                         <hr className={style.line} ></hr>
//                     </div>
//                     <div className={style.link__container}>
//                         <p className={style.footer__text}>
//                             {props.footerInstruction}
//                             {// @ts-ignore
//                                 <NavLink className={style.link} to={`profile`} activeclassname='active'>
//                                     {props.footerLink}
//                                 </NavLink>}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FormCard 