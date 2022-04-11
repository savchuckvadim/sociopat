import { connect } from "react-redux";
import ProfileBase from "./Profile-Base";


const mapStateToProps = (state) => {

    return {
        state: state.profileReducer
    }
};

const mapDispatchToProps = (dispatch) => {

    return {

    }
};

export const ProfileBaseContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBase)

