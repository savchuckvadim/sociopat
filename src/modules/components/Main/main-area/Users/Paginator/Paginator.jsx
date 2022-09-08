import {  useState } from 'react';
import style from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, portionSize = 10, setCurrentPage, requestUsers, currentPortion }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(currentPortion);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const onPageChanged = (pageNumber, portionNumber) => {
        setCurrentPage(pageNumber, portionNumber)
        requestUsers(pageNumber, pageSize)
  
    }

    return (
        <div className={style.pages}>
            {portionNumber > 1 &&
                <button className={style.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    let spanClassName = style.span
                    currentPage === p ? spanClassName = style.selectPage : spanClassName = style.span
                    return <span
                        key={`user-page-${p}`}
                        onClick={() => {
                            onPageChanged(p, portionNumber)
                            
                        }}

                        className={spanClassName}>

                        {p}
                    </span>
                })}
            {portionCount > portionNumber &&
                <button className={style.next} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator