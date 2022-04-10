import { NavLink } from 'react-router-dom';
import style from './ItemOfLeftMenu.module.css';



const Item = (props) => {

    console.log(props.namesOfLink)
    let result = props.namesOfItems.map((name, i) => (
        
        <NavLink
            key={i}
            activeclassname={style.active}
            className={style.left__menu__item}
            to={`${props.namesOfLink[i]}`}>
            {name}
        </NavLink>
    ))

    return (
        result
    )
}




export default Item;