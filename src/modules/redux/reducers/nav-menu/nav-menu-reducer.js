const NAV_MENU = 'NAV_MENU';


let initialState = [
    {
        name: 'Profile',
        link: 'profile',
        icon: {
            index: 0,
            iconClasses: ['icon', 'iconRed'],
            currentIconClass: 'iconRed',
            containerClasses: ['item', 'itemFocus'],
            currentContainerClass: 'itemFocus'

        }
    },
    {
        name: 'Messages',
        link: 'messages/',
        icon: {
            index: 0,
            iconClasses: ['icon', 'iconRed'],
            currentIconClass: 'icon',
            containerClasses: ['item', 'itemFocus'],
            currentContainerClass: 'item'
        }
    },
    {
        name: 'People',
        link: 'users',
        icon: {
            index: 0,
            iconClasses: ['icon', 'iconRed'],
            currentIconClass: 'icon',
            containerClasses: ['item', 'itemFocus'],
            currentContainerClass: 'item'
        }



    }

]
export const navMenuActionCreator = (index) => {
    return {
        type: NAV_MENU,
        index
    }
};

const navMenuReducer = (state = initialState, action) => {
    let result = state
    result.forEach(item => {
        item.icon.currentIconClass = item.icon.iconClasses[item.icon.index]
        item.icon.currentContainerClass = item.icon.containerClasses[item.icon.index]
    })
  
    switch (action.type) {

        case NAV_MENU:

            result = state.map(item => (
                { ...item }
            ))
            result.forEach(item => {
                item.icon.index = 0
            })
            let item = result[action.index].icon
            item.index = 1
            result.forEach((item, index) => {
                item.icon.currentIconClass = item.icon.iconClasses[item.icon.index]
                item.icon.currentContainerClass = item.icon.containerClasses[item.icon.index]
            })
            return result;

        default:
            return result;

    }

};

export default navMenuReducer;