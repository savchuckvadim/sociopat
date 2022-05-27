import './Input.css';
import React from 'react';
import getLoginRegistrationIcon from '../../../../../../../assets/imgs/login-form/login-registartion-imgs';
import { symbol } from '../../../../../../utils/Validators/validator';
export const Input2 = (field) => {

    let index = 0


    let containerClasses = ['container', 'containerFocus']

    let error = null

    if (field.meta.active || field.input.value) {
        index = 1

    }
   

    if (field.meta.error && field.meta.touched && !field.meta.active) {

        error = <span className='error'>{field.meta.error}</span>
    }

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon(field.placeholder, index)

    return (
        <>
            <div className={containerClass}>
                {icon}

                <input
                    {...field.input}
                 
                    key={field.placeholder}
                    className='input'
                    type={`${field.type}`}
                    placeholder={field.placeholder} />
                {error}
            </div>

        </>
    )

}
class Input extends React.Component {



    render() {

        const {
            input: { value, onChange }
        } = this.props
        let index = 0


        let containerClasses = ['container', 'containerFocus']

        let error = null
        if (this.props.meta.active || this.props.input.value) {
            index = 1

        }

        if (this.props.meta.error && this.props.meta.touched && !this.props.meta.active) {

            error = this.props.meta.error
        }

        let containerClass = containerClasses[index]
        let icon = getLoginRegistrationIcon(this.props.placeholder, index)

        return (
            <>
                <div className={containerClass}>
                    {icon}

                    <input
                        {...this.props.input}

                        key={this.props.placeholder}
                        className='input'
                        type={`${this.props.type}`}
                        placeholder={this.props.placeholder} />
                    {/* {this.props.meta.touched && this.props.meta.error &&
                   <span className='error'>{this.props.meta.error}</span>} */}
                </div>

            </>
        )
    }
}

export default Input