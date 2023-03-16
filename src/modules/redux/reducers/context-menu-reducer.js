
const CONTEXT_TOGGLE = 'contextMenu/CONTEXT_TOGGLE'

const initialState = {
    typeOfArea: null, //message, dialog , group-dialog 
    isActive: false,
    xPos: 0,
    yPos: 0,
    messageMenu: ['Forward', 'Edit', 'Delete'],
    groupDialogMenu: ['Edit', 'Delete'],
    dialogMenu: ['Delete'], //TODO
    currentMenu: [],
    currentEntityId: null
}


//AC

export const contextMenuToggler = (
    isActive,
    typeOfArea = null,
    currentEntityId
) => ({
    type: CONTEXT_TOGGLE,
    isActive,
    typeOfArea,
    currentEntityId
})


const contextMenuReducer = (state = initialState, action) => {

    switch (action.type) {
        case CONTEXT_TOGGLE:
            let currentMenu = []
            if (action.isActive) {

                if (action.typeOfArea === 'message') {
                    currentMenu = [...state.messageMenu]
                } else if (action.typeOfArea === 'dialog') {
                    currentMenu = [...state.dialogMenu]
                }else if (action.typeOfArea === 'group-dialog') {
                    currentMenu = [...state.groupDialogMenu]
                }
                
                return {
                    ...state,
                    typeOfArea: action.typeOfArea,
                    isActive: action.isActive,
                    currentMenu,
                    currentEntityId: action.currentEntityId
                }

            }
            
            return { ...state, typeOfArea: null, isActive: false, xPos: 0, yPos: 0, currentMenu }

        default:
            return state;
    }
}

export default contextMenuReducer