import { connect } from "react-redux"
import { navMenuActionCreator } from "../../../redux/reducers/nav-menu/nav-menu-reducer"
import NavMenu from "./Nav-Menu"

const mapStateToProps = (state) => {
        let navMenu = state.navMenu
    return {
        items: navMenu,
        profileIconClass: navMenu[0].icon.currentIconClass,
        messagesIconClass: navMenu[1].icon.currentIconClass,
        usersIconClass: navMenu[2].icon.currentIconClass,

    }
}
const mapDispatchToProps = (dispatch) => {

    const click = (index) => {
        const action = navMenuActionCreator(index)
        dispatch(action)
    }
    return {
        click
    }
}


export const NavMenuContainer = connect(mapStateToProps, mapDispatchToProps)(NavMenu)