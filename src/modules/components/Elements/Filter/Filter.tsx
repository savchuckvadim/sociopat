import style from './Filter.module.scss';

type ParameterType = {
    name: string,
    callback: (name: string, otherParameters?: Array<any>) => void
}

type PropsType = Array<ParameterType>


const Filter: React.FC<PropsType> = (props) => {

    return(
        <div className={style.wrapper}>

        </div>
    )
}

export default Filter