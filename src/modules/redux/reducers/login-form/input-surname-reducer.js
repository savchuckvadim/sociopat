const INPUT_SURNAME_CLASS = 'INPUT_SURNAME_CLASS';
const INPUT_SURNAME_VALUE = 'INPUT_SURNAME_VALUE'

const initialState = {
    index: 0,
    title: 'Surname',
    iconClasses: ['icon', 'iconRed'],
    currentIconClass: 'icon',
    containerClasses: ['container', 'containerFocus'],
    currentContainerClass: 'container',
    value: ''

}
export const inputSurnameClassActionCreator = () => {

    return {
        type: INPUT_SURNAME_CLASS
    }
}
export const inputSurnameValueActionCreator = (value) => {

    return {
        type: INPUT_SURNAME_VALUE,
        value
    }
}

const inputSurnameReducer = (state = initialState, action) => {
    let result = state
  
    switch (action.type) {
        case INPUT_SURNAME_CLASS:
            
            result = { ...state }
            result.index === 0 ? result.index = 1 : result.index = 0

            result.currentIconClass = result.iconClasses[result.index]
            result.currentContainerClass = result.containerClasses[result.index]
            return result;

        case INPUT_SURNAME_VALUE:
            result = { ...state }
            result.value = action.value
            return result;
        default:
            return result;
    }

}

export default inputSurnameReducer