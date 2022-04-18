const INPUT_PASSWORD_CLASS = 'INPUT_PASSWORD_CLASS';
const INPUT_PASSWORD_VALUE = 'INPUT_PASSWORD_VALUE'

const initialState = {
    index: 0,
    title: 'Password',
    iconClasses: ['icon', 'iconRed'],
    currentIconClass: 'icon',
    containerClasses: ['container', 'containerFocus'],
    currentContainerClass: 'container',
    value: ''

}
export const inputPasswordClassActionCreator = () => {

    return {
        type: INPUT_PASSWORD_CLASS
    }
}
export const inputPasswordValueActionCreator = (value) => {

    return {
        type: INPUT_PASSWORD_VALUE,
        value
    }
}

const inputPasswordReducer = (state = initialState, action) => {
    let result = state
  
    switch (action.type) {
        case INPUT_PASSWORD_CLASS:
            
            result = { ...state }
            result.index === 0 ? result.index = 1 : result.index = 0

            result.currentIconClass = result.iconClasses[result.index]
            result.currentContainerClass = result.containerClasses[result.index]
            return result;

        case INPUT_PASSWORD_VALUE:
            result = { ...state }
            result.value = action.value
            return result;
        default:
            return result;
    }

}

export default inputPasswordReducer