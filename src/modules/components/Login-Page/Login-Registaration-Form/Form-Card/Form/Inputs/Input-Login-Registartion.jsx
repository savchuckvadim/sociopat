import './Input.css';
import React from 'react';
import getLoginRegistrationIcon from '../../../../../../../assets/imgs/login-form/login-registartion-imgs';

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

debugger
        return (
            <>
                <div className={containerClass}>
                    {icon}

                    <input
                        {...this.props.input}
                        {...this.props.meta}
                        key={this.props.placeholder}
                        className='input'
                        type={`${this.props.type}`}
                        placeholder={this.props.placeholder} />
                    <span className='error'>{error}</span>
                </div>

            </>
        )
    }
}

export default Input