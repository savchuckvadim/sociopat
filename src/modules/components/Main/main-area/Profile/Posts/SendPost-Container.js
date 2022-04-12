import { connect } from "react-redux";
import { changeCurrentPostActionCreator } from "../../../../../redux/reducers/posts/send-post-reducer"
import { addPostActionCreator } from "../../../../../redux/reducers/profile-reducer";
import SendPost from "./SendPost";


const mapStateToProps = (state) => {

    return {
        value: state.changeCurrentPostReducer.value,
        nameOfButton: 'add post'
    }
};
const mapDispatchToProps = (dispatch) => {

    const changeCurrentPost = (value) => {
        const actionChangeCurrentPost = changeCurrentPostActionCreator(value)
        dispatch(actionChangeCurrentPost);
    }
    const addPost = (value) => {
        
        if(value){
            const action = addPostActionCreator(value);
            dispatch(action);
        
        }
       
    }
    return {
        changeCurrentPost,
        addPost
    }
};

export const SendPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendPost)
