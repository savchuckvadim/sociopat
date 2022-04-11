import { connect } from "react-redux";
import { changeCurrentPostActionCreator } from "../../../../../redux/reducers/posts/send-post-reducer"
import SendPost from "./SendPost";


const mapStateToProps = (state) => {

    return {
        value: state.changeCurrentPostReducer.value
    }
};
const mapDispatchToProps = (dispatch) => {

    const changeCurrentPost = (value) => {
        const actionChangeCurrentPost = changeCurrentPostActionCreator(value)
        dispatch(actionChangeCurrentPost);
    }
    debugger
    return {
        changeCurrentPost:changeCurrentPost
    }
};

export const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)
