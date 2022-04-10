import { Route, Routes } from "react-router-dom";
import CurrentDialog from "./CurrentDialog";

const RouteCurrentDialog = (props) => {

    return (
        <Routes>
            <Route path="messages//*" index element={<CurrentDialog id={1} />} />
            <Route path=":dialog/1" element={<CurrentDialog id={1} />} />
            <Route path=":dialog/2" element={<CurrentDialog id={2} />} />
            <Route path=":dialog/3" element={<CurrentDialog id={3} />} />
            <Route path=":dialog/4" element={<CurrentDialog id={4} />} />
            <Route path=":dialog/5" element={<CurrentDialog id={5} />} />
           
        </Routes>
    )
}

export default RouteCurrentDialog