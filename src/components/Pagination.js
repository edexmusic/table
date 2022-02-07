import React from "react";
import './Pagination.css'

const Pagination = ({usersPerPage, allUsers, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allUsers / usersPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className={'paginationTable'}>
                {pageNumber.map(number => (
                    <li className={'paginationNumbers'} key={number}>
                        <a onClick={() =>
                            paginate(number)
                        } href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;