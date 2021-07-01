import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
    margin-top: var(--spacingRegular);

    & > * {
        display: inline-block;
        padding: 10px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--colorActive1);
        color: white;
        transition: var(--transitionBasic);

        &:hover,
        &[aria-current],
        &.current {
            box-shadow: ${({ theme }) => theme.elevationSpecial.dp8};
            background-color: var(--colorActive2);
            color: var(--colorWhite);
        }
    }

    & > *:not(:last-child) {
        margin-right: var(--spacingRegular);
    }
`;

export default function Pagination({ pageSize, totalCount, currentPage, skip, base, className }) {
    // make some variables
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
        <PaginationStyles className={className}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${base}/${i >= 0 ? i + 1 : ''}`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
        </PaginationStyles>
    );
}
