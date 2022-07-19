// import React from 'react'
// import style from './Status.module.css'

// class Status extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status
//     }



//     activateEditMode = () => {
//         this.setState({
//             editMode: true,
//             status: this.props.status 
//         })
//     }
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })

//         this.props.updateStatus(this.state.status)
//     }
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })

//     }
//     render() {
       
//         return (

//             <div className={style.about}>
//                 {this.state.editMode
//                     ? <textarea
//                         onChange={this.onStatusChange}
//                         onBlur={this.deactivateEditMode}
//                         autoFocus
//                         className={style.input}
//                         // type='textarea'
//                         rows='5'
//                         cols={'82'}
//                         value={this.state.status} >

//                     </textarea>
//                     : <p className={style.text}
//                         onDoubleClick={this.activateEditMode} 
                       
//                         >
                            
//                         {this.props.status 
//                         ? this.props.status 
//                         : 'Напишите о себе'
//                     }
//                     </p>
//                 }

//             </div>

//         )
//     }
// }

// export default Status