import { NavLink } from 'react-router-dom';
import Profile from '../main-area/Profile/Profile';



const Item = (props) => {

    let result = [];
    for (let i = 0; i < props.namesOfItems.length; i++) {
        result.push(<NavLink key={i} className='left__menu__item' to={props.namesOfLink[i]}>{props.namesOfItems[i]}</NavLink>)

    }
    {/* <NavLink className="left__menu__item" to={props.link}>{props.nameOfItem}</NavLink> */ }
    return (
        result
    )
}




export default Item;