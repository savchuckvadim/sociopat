const INPUT_NAME_CLASS = 'INPUT_NAME_CLASS';
const INPUT_NAME_VALUE = 'INPUT_NAME_VALUE'

const initialState = {
    index: 0,
    title: 'Name',
    iconClasses: ['icon', 'iconRed'],
    currentIconClass: 'icon',
    containerClasses: ['container', 'containerFocus'],
    currentContainerClass: 'container',
    value: ''

}
export const inputNameClassActionCreator = () => {

    return {
        type: INPUT_NAME_CLASS
    }
}
export const inputNameValueActionCreator = (value) => {

    return {
        type: INPUT_NAME_VALUE,
        value
    }
}

const inputNameReducer = (state = initialState, action) => {
    let result = state
  
    switch (action.type) {
        case INPUT_NAME_CLASS:
            
            result = { ...state }
            result.index === 0 ? result.index = 1 : result.index = 0

            result.currentIconClass = result.iconClasses[result.index]
            result.currentContainerClass = result.containerClasses[result.index]
            return result;

        case INPUT_NAME_VALUE:
            result = { ...state }
            result.value = action.value
            return result;
        default:
            return result;
    }

}

export default inputNameReducer