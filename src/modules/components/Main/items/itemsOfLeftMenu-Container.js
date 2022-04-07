import { connect } from "react-redux"
import Item from "./ItemOfLeftMenu"

const mapStateToProps = (state) => {
        
    return {
        namesOfLink: state.itemsReducer.namesOfLink,
        namesOfItems: state.itemsReducer.namesOfItems
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        
    }
}


export const LeftItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Item)