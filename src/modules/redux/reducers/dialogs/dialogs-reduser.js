const DIALOGS = 'DIALOGS';

const initialState = [
    {
        id:1,
        nameOfDialog:'Каляс-Маляс',
        lastMessage: 'Э! ',
        iconOfDialog: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id:2,
        nameOfDialog:'Крошка-картошка',
        lastMessage: 'Отзовись!',
        iconOfDialog: 'https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id:3,
        nameOfDialog:'НормальныйЧел',
        lastMessage: 'Слышь! Всё на ручках',
        iconOfDialog: 'https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80'
    },
    {
        id:4,
        nameOfDialog:'Инопланетянен',
        lastMessage: 'Пора лететь, бро!',
        iconOfDialog: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        id:5,
        nameOfDialog:'Жюззель',
        lastMessage: 'чё трубку не берешь? есть воп',
        iconOfDialog: 'https://images.unsplash.com/photo-1475699230575-2a5929c0ed72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },

];

export const dialogsActionCreator = () => {
    return {
        type: DIALOGS
    }
};

const dialogsReducer = (state = initialState, action) => {

    if (action.type === DIALOGS) {

    }

    return state
};

export default dialogsReducer;

