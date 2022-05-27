import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { required, symbol } from '../../../../../utils/Validators/validator'
import RedButton from '../../../../Elements/Button/Red-Button'

import style from './Form.module.css'
import { Navigate, NavLink } from 'react-router-dom'
import Input from './Inputs/Input-Login-Registartion'
import React from 'react'



let Form = (props) => {
    if (props.error) {
        props.setError(props.error)
    }


    let inputs = []

    let typeIndex = 0
    props.type === 'login'
        ? typeIndex = 0
        : typeIndex = 1



    inputs = props.fields.map(field => {
      

       return <Field
            component={Input}
            // validate={[symbol, required]}
            name={field.name}
            type={field.name}
            placeholder={field.placeholder}
            key={field.name}
        />
    }
    )

    return (<>

        <form onSubmit={props.handleSubmit} className={style.inputs__container}>

            {inputs}
            <div className={style.button__container}>
                {/* <NavLink className={style.button__container} to={'../'}>  */}
                <RedButton border={16} name={'НАЖАТЬ'} />
                {/* </NavLink> */}
            </div>

        </form>
    </>

    )
}

export default Form = reduxForm({ form: 'login'
})(Form)