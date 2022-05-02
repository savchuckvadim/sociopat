import React from 'react'
import style from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false
    }

    render() {
        return (

            <div className={style.about}>
                {this.state.editMode
                    ? <input  autoFocus className={style.input} type='textarea' value={`My actions are not for fame, I just hate most people.
                    I don't see anything remarkable in them. People are really stupid shit. I bring them joy by suffering to die without any slobbering "buts".`} >
                        
                    </input>
                    : <p >
                        My actions are not for fame, I just hate most people.
                        I don't see anything remarkable in them. People are really stupid shit. I bring them joy by suffering to die without any slobbering "buts".
                    </p>
                }

            </div>

        )
    }
}

export default Status