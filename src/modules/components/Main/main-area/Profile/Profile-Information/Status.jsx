import React from 'react'
import style from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false
    }

    toggleMode = () => {

        this.state.editMode
            ? this.setState({
                editMode: false
            })
            :
            this.setState({
                editMode: true
            })


    }

    render() {
        return (

            <div className={style.about}>
                {this.state.editMode
                    ? <input onDoubleClick={this.toggleMode} autoFocus className={style.input} type='textarea' value={this.props.aboutMe} >

                    </input>
                    : <p className={style.input} onBlur={this.toggleMode} >
                        {this.props.aboutMe}
                    </p>
                }

            </div>

        )
    }
}

export default Status