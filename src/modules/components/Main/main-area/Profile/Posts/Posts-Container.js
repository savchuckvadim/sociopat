import { connect } from "react-redux"
import Posts from "./Posts"


const mapStateToProps = (state) => {

    return {

        profile: state.profileReducer,
        posts: state.profileReducer.posts

    }
}
const mapDispatchToProps = () => {

    return {


    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)