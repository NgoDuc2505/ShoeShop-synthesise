import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
import PaginationItem from './PaginationItem';

//----------------------------------------------------

function PaginationWrapper({itemsPerPage, items}) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <div className='paginate_react'>
            <PaginationItem currentItems={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeClassName='active-page'
            />
        </div>
    )
}

export default PaginationWrapper