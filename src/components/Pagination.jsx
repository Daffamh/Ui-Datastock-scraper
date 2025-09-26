// Pagination.js
import React from 'react';
import './pagination.css'; // Import file CSS

const Pagination = ({
                        currentPage,
                        totalPages,
                        onPageChange,
                        itemsPerPage,
                        onItemsPerPageChange
                    }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    // Fungsi untuk menampilkan nomor halaman tanpa ellipsis
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 7; // Jumlah maksimal halaman yang ditampilkan

        if (totalPages <= maxVisiblePages) {
            // Jika total halaman kurang dari atau sama dengan maxVisiblePages, tampilkan semua
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Selalu tampilkan halaman pertama
            pageNumbers.push(1);

            // Tampilkan halaman saatini dan sekitarnya
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            // Jika halaman saatini dekat dengan awal
            if (currentPage <= 3) {
                startPage = 2;
                endPage = Math.min(5, totalPages - 1);
            }
            // Jika halaman saatini dekat dengan akhir
            else if (currentPage >= totalPages - 2) {
                startPage = Math.max(2, totalPages - 4);
                endPage = totalPages - 1;
            }

            // Tambahkan halaman antara pertama dan terakhir
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            // Selalu tampilkan halaman terakhir
            if (endPage < totalPages - 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination-container">
            {/* Header dengan "RESULT" */}

            {/* Container pagination dengan background gelap */}
            <div className="pagination-wrapper">
                <div className="pagination-controls">
                    {/* Tombol pertama («) */}
                    <button
                        onClick={handleFirstPage}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        «
                    </button>

                    {/* Tombol sebelumnya (<) */}
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        &lt;
                    </button>

                    {/* Nomor halaman */}
                    <div className="page-numbers">
                        {getPageNumbers().map((page, index) => (
                            page === '...' ? (
                                <span key={index} className="page-ellipsis">...</span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => handlePageClick(page)}
                                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                                >
                                    {page}
                                </button>
                            )
                        ))}
                    </div>

                    {/* Tombol berikutnya (>) */}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        &gt;
                    </button>

                    {/* Tombol terakhir (») */}
                    <button
                        onClick={handleLastPage}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        »
                    </button>
                </div>

                {/* Kontrol items per page */}
                <div className="items-per-page-control">
                    <label>Show:</label>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
                        className="items-per-page-control select"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Pagination;