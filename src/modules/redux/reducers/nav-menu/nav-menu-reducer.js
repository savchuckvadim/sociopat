const NAV_MENU = 'NAV_MENU';


let initialState = [
    {
        name: 'Profile',
        link: 'profile',
        icon: {
            index: 0,
            // img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.1081 10.8417 10.892 10.8417 9.52515 9.47488C8.15831 8.10804 8.15831 5.89197 9.52515 4.52513C10.892 3.15829 13.1081 3.15829 14.4749 4.52513Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            //     <path d="M4 18.5V19.5C4 20.052 4.448 20.5 5 20.5H19C19.552 20.5 20 20.052 20 19.5V18.5C20 15.474 16.048 13.508 12 13.508C7.952 13.508 4 15.474 4 18.5Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            // </svg>,
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
            // img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M8.12012 20H12.0001" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            //     <path d="M8.26401 20H4.92501C4.10201 20 3.69001 19.005 4.27201 18.424L5.36201 17.334" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            //     <path d="M4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            //     <path d="M5.73011 16.96L5.36011 17.33" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            //     <path d="M5.733 16.963C4.651 15.599 4 13.877 4 12" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            // </svg>,
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
            // img: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <path d="M8 14.58C6.5 14 6 13.5905 6 12.37C6 11.1494 6.89543 10.16 8 10.16L8.99994 10.1599M8 14.58C8 14.58 9.5 15 12 15C14.5 15 16 14.58 16 14.58M8 14.58H6C4.89543 14.58 4 15.5694 4 16.79C4 18.0105 4.89543 19 6 19C6 19 8.5 19.5 12 19.5C15.5 19.5 18 19 18 19C19.1046 19 20 18.0105 20 16.79C20 15.5694 19.1046 14.58 18 14.58H16M16 14.58C17.5 14 18 13.5905 18 12.37C18 11.1494 17.1046 10.16 16 10.16L14.9999 10.1599M14.9999 10.1599C14.9999 10.1599 15.9999 9.85954 15.9999 6.97098C15.9999 4.08242 12.9999 2.70619 13.4999 5.60432C14 8.50245 7.49997 6.97097 8.99994 10.1599M14.9999 10.1599C14.9999 10.1599 14 10.5 12 10.5C10 10.5 8.99994 10.1599 8.99994 10.1599" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            // </svg>,
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
    result.forEach((item, index) => {
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