import style from './CurrentDialog.module.css'


const CurrentDialog = (props) => {

    return (
        <div className={style.previous__meesages}>
            <div>old {props.id} message 1</div>
            <div>old {props.id} message 2</div>
            <div>old {props.id} message 3</div>
        </div>
    )
};


export default CurrentDialog;