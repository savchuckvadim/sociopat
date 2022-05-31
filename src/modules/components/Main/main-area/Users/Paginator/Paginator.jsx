import style from './Paginator.module.css'

const Paginator = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    
    return (
        <>
            {pages.map(p => {
                let spanClassName = style.span
                props.currentPage === p ? spanClassName = style.selectPage : spanClassName = style.span
                return <span
                    key={`user-page-${p}`}
                    onClick={() => { props.onPageChanged(p) }}

                    className={spanClassName}>

                    {p}
                </span>
            })}
        </>
    )
}

export default Paginator