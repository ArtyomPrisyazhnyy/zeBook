import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/actions/products';

const Pagination = ({ totalCount, limit, selectedPage }) => {
    const dispatch = useDispatch();

    const pageCount = Math.ceil(totalCount / limit);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <ul className="pagination">
                {pages.map(page =>
                    <li
                        key={page}
                        data-active={selectedPage === page}
                        className="pagination__item"
                        onClick={() => { dispatch(setPage(page)) }}
                    >
                        <div>
                            <span>{page}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pagination