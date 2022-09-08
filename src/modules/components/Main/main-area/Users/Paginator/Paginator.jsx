import { useState } from 'react';
import style from './Paginator.module.css'

const Paginator = (props) => {

//props { totalItemsCount, pageSize, currentPage, portionSize = 10, onPageChanged }
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.pageSize;
    

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber &&  p <= rightPortionPageNumber)
            .map(p => {
                let spanClassName = style.span
                props.currentPage === p ? spanClassName = style.selectPage : spanClassName = style.span
                return <span
                    key={`user-page-${p}`}
                    onClick={() => { props.onPageChanged(p, props.pageSize) }}

                    className={spanClassName}>

                    {p}
                </span>
            })}
             {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator