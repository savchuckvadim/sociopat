const PROFILE = 'PROFILE';

let initialState = {
    login: 'Super User',
    aboutMe: 'Российский предприниматель. По данным Forbes, на 5 февраля 2022 года занимал 608-е место в списке наиболее состоятельных людей мира, в списке богатейших бизнесменов России в 2021 году занимал 32-е место с состоянием 4,7 миллиарда долларов. Известен как основатель «Тинькофф банка»',
    img: 'https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    
};

export const profileActionCreator = () => {
    return {
        type: PROFILE
    }
};

const profileReducer = (state = initialState, action) => {
    if (action.type === PROFILE) {

    }

    return state
};

export default profileReducer;