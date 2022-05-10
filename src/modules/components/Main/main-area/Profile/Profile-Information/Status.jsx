import React from 'react'
import style from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }



    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status 
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    render() {
       
        return (

            <div className={style.about}>
                {this.state.editMode
                    ? <input
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}
                        autoFocus
                        className={style.input}
                        type='textarea'
                        value={this.state.status} >

                    </input>
                    : <p className={style.input}
                        onDoubleClick={this.activateEditMode} >
                        {this.props.status}
                    </p>
                }

            </div>

        )
    }
}

export default Status