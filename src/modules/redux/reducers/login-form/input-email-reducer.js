const INPUT_EMAIL_CLASS = 'INPUT_EMAIL_CLASS';
const INPUT_EMAIL_VALUE = 'INPUT_EMAIL_VALUE'

const initialState = {
    index: 0,
    title: 'E-mail',
    iconClasses: ['icon', 'iconRed'],
    currentIconClass: 'icon',
    containerClasses: ['container', 'containerFocus'],
    currentContainerClass: 'container',
    value: ''

}
export const inputEmailClassActionCreator = () => {

    return {
        type: INPUT_EMAIL_CLASS
    }
}
export const inputEmailValueActionCreator = (value) => {

    return {
        type: INPUT_EMAIL_VALUE,
        value
    }
}

const inputEmailReducer = (state = initialState, action) => {
    let result = state
  
    switch (action.type) {
        case INPUT_EMAIL_CLASS:
            
            result = { ...state }
            result.index === 0 ? result.index = 1 : result.index = 0

            result.currentIconClass = result.iconClasses[result.index]
            result.currentContainerClass = result.containerClasses[result.index]
            return result;

        case INPUT_EMAIL_VALUE:
            result = { ...state }
            result.value = action.value
            return result;
        default:
            return result;
    }

}

export default inputEmailReducer