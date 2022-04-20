import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "../Dialogs/Dialogs-Container";
import CurrentDialogsCard from "./Current-Dilogs-Card";
import CurrentDialog from "./CurrentDialog";

const RouteCurrentDialog = (props) => {

    const routes = props.dialogs.map(dialog => (
        <Route
            key={`dialog-{dialog.id}`}
            path={`:dialog/${dialog.id}`}
            element={<CurrentDialogsCard usrers={props.users} id={dialog.id} messages={dialog.messages} />}
        />
    ))
    // const dialogs = <Route key='defaultDialog' path=':' element={ <DialogsContainer />} />
    // props.dialogs[props.dialogs.length - 1]
    // const defaultRoute = <Route key='defaultDialog' path='messages//*' element={<CurrentDialog id={defaultDialog.id} messages={defaultDialog.messages} />} />

    return (
        <Routes>
            {/* {dialogs} */}
            {routes}

        </Routes>
    )
}

export default RouteCurrentDialog