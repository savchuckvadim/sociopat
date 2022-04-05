import Profile from "../Profile"
import Item from "./items/ItemOfLeftMenu"
import './Main.css'
const Main = () => {

    return (
        <>
            <main id="main">
                <div id="left__area">
                    <div id="left__menu">
                        <Item />
                    </div>
                </div>
                <div id="main__area">

                </div>
            </main>
        </>
    )
}

export default Main