import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getDialogs } from "../../../../../redux/reducers/dialogs/dialogs-reduser";
import Dialogs from "./Dialogs"

const initialState = [
    {
        id: 5,
        nameOfDialog: 'Каляс-Маляс',
        lastMessage: 'Э! ',
        iconOfDialog: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        messages: [
            {
                send: 'to',
                message_body: 'Э!'
            },
            {
                send: 'to',
                message_body: 'Как тебя зовут?'
            },
            {
                send: 'from',
                message_body: 'Привет'
            },
            {
                send: 'to',
                message_body: 'Привет'
            },


        ],

    },
    {
        id: 4,
        nameOfDialog: 'Крошка-картошка',
        lastMessage: 'Отзовись!',
        iconOfDialog: 'https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        messages: [
            {
                send: 'to',
                message_body: 'to 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'from',
                message_body: 'to 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },


        ],
    },
    {
        id: 3,
        nameOfDialog: 'НормальныйЧел',
        lastMessage: 'Слышь! Всё на ручках',
        iconOfDialog: 'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80',
        messages: [
            {
                send: 'to',
                message_body: 'to 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'from',
                message_body: 'to 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },


        ],
    },
    {
        id: 2,
        nameOfDialog: 'Инопланетянен',
        lastMessage: 'Пора лететь, бро!',
        iconOfDialog: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        messages: [
            {
                send: 'to',
                message_body: 'to 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'from',
                message_body: 'to 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },


        ],
    },
    {
        id: 1,
        nameOfDialog: 'Жюззель',
        lastMessage: 'чё трубку не берешь? есть воп',
        iconOfDialog: 'https://images.unsplash.com/photo-1475699230575-2a5929c0ed72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        messages: [
            {
                send: 'to',
                message_body: 'to 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'from',
                message_body: 'to 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },
            {
                send: 'to',
                message_body: 'to 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur qui laborum dolores, amet distinctio autem eveniet voluptatibus voluptatum recusandae provident accusamus libero quibusdam harum. Beatae magnam dolor doloremque dignissimos?'
            },


        ],
    },


];

const mapStateToProps = (state) => {

    return {
        dialogs: initialState,
        user: state.users[0],

    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}


const DialogsContainer = (props) => {

    useEffect(() => {
        props.getDialogs()
    }, [])

    return <Dialogs {...props} />
}

export default compose(
    connect(mapStateToProps, {
        getDialogs
    })
)(DialogsContainer)