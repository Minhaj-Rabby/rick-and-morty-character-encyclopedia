import React, { useState, useEffect } from 'react';
import './SectionPage.css';

const SectionPage = ({ info, pageNumber, updatePageNumber }) => {
    const totalPages = info?.pages;
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [displayedPages, setDisplayedPages] = useState([]);

    useEffect(() => {
        // Calculate the range of displayed page numbers
        const range = calculatePageRange(currentPage, totalPages);
        setDisplayedPages(range);
    }, [currentPage, totalPages]);

    const calculatePageRange = (currentPage, totalPages) => {
        const rangeSize = 8;
        const halfRange = Math.floor(rangeSize / 2);

        let start = Math.max(1, currentPage - halfRange);
        let end = Math.min(totalPages, start + rangeSize - 1);

        if (end - start + 1 < rangeSize) {
            start = Math.max(1, end - rangeSize + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const handlePageChange = (newPage) => {
        updatePageNumber(newPage);
        setCurrentPage(newPage);
    };

    return (
        <div className="pagination-section section-container">
            <div>
                <button
                    className='color-btn'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>

                {
                    currentPage >= 6 &&
                    <button className='side-btn'>---</button>
                }

                {

                    displayedPages.map((page) => (
                        <button
                            key={page}
                            className={page === currentPage ? 'color-btn' : ''}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                {
                    currentPage <= 38 &&
                    <button className='side-btn'>---</button>
                }



                <button
                    className="color-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default SectionPage;
