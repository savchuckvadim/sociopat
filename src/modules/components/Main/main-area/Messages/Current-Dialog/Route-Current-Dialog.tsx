import { Route, Routes } from "react-router-dom"
import { SetCurrentDialogType } from "../../../../../redux/reducers/dialogs/dialogs-reducer"
import { DialogType, MessageType, UserType } from "../../../../../types/types"
import CurrentDialogsCard from "./Current-Dilogs-Card"

type PropsType = {
    dialogs: Array<DialogType>
    messages:Array<MessageType>
    isMessagesFetching: boolean
    currentDialog: DialogType
    newMessage: string
    authUser: UserType
    setCurrentDialog: (dialog: DialogType | null) => SetCurrentDialogType
    sendMessage: (dialogId: number, body: string, isForwarded: boolean, isEdited : boolean) => void
    getMessages: (dialogId: number, currentPage: number, pageSize?: number) => any
}
const RouteCurrentDialog: React.FC<PropsType> = (props) => {

    const routes = props.dialogs.map(dialog => (
        <Route
            key={`dialog-${dialog.id}`}
            path={`:dialog/${dialog.id}`}
            element={
                <CurrentDialogsCard
                    dialog={dialog}
                    authUser={props.authUser}
                    getMessages={props.getMessages}
                    messages={props.messages}
                    isMessagesFetching={props.isMessagesFetching}
                    setCurrentDialog={props.setCurrentDialog}
                    sendMessage={props.sendMessage}
                />}
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