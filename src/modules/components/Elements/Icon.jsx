import style from './Icon.module.css';

const Icon = (props) =>

(
    <div className={style.icon__container}>
        <img className={style.icon} src={props.img} alt="icon" />
    </div>
);

export default Icon;