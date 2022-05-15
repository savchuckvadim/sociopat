import { connect } from "react-redux";
import { logout } from "../../redux/reducers/auth/auth-reducer";
import Logout from "./Logout";


const mapStateToProps = (state) => {

    return {}
}
 const LogoutContainer = connect(mapStateToProps, {
    logout: logout
})(Logout)

export default LogoutContainer