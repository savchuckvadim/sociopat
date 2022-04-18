const INPUT_REPEAT_PASS_CLASS = 'INPUT_REPEAT_PASS_CLASS';
const INPUT_REPEAT_PASS_VALUE = 'INPUT_REPEAT_PASS_VALUE';

const initialState = {
    index: 0,
    title: 'Repeat Password',
    iconClasses: ['icon', 'iconRed'],
    currentIconClass: 'icon',
    containerClasses: ['container', 'containerFocus'],
    currentContainerClass: 'container',
    value: ''

}
export const inputRepeatPassClassActionCreator = () => {

    return {
        type: INPUT_REPEAT_PASS_CLASS
    }
}
export const inputRepeatPassValueActionCreator = (value) => {

    return {
        type: INPUT_REPEAT_PASS_VALUE,
        value
    }
}

const inputRepeatPassReducer = (state = initialState, action) => {
    let result = state
  
    switch (action.type) {
        case INPUT_REPEAT_PASS_CLASS:
            
            result = { ...state }
            result.index === 0 ? result.index = 1 : result.index = 0

            result.currentIconClass = result.iconClasses[result.index]
            result.currentContainerClass = result.containerClasses[result.index]
            return result;

        case INPUT_REPEAT_PASS_VALUE:
            result = { ...state }
            result.value = action.value
            return result;
        default:
            return result;
    }

}

export default inputRepeatPassReducer