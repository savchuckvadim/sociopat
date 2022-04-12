import { Route, Routes } from "react-router-dom";
import CurrentDialog from "./CurrentDialog";

const RouteCurrentDialog = (props) => {
    const routes = props.dialogs.map(dialog => (
        <Route key={`dialog-{dialog.id}`} path={`:dialog/${dialog.id}`} element={<CurrentDialog id={dialog.id} messages={dialog.messages} />} />
    ))
    const defaultDialog = props.dialogs[props.dialogs.length-1]
    const defaultRoute = <Route key='defaultDialog' path='messages//*' element={<CurrentDialog id={defaultDialog.id} messages={defaultDialog.messages} />} />

    return (
        <Routes>
            {defaultRoute}
            {routes}

        </Routes>
    )
}

export default RouteCurrentDialog