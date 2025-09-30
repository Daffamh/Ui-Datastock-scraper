// DataTable.js
import React, { useState } from 'react';
import TableRow from './TableRow';
import Pagination from './Pagination';

const DataTable = ({ dataSource, displayKeys }) => {
    // State untuk pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Hitung total halaman
    const totalPages = Math.ceil(dataSource.length / itemsPerPage);

    // Dapatkan data untuk halaman saat ini
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = dataSource.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk navigasi halaman
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleItemsPerPageChange = (newItemsPerPage) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset ke halaman pertama saat mengubah jumlah item
    };

    return (
        <div className="data-table-container">
            <div className="table-header">
                <div className="filter-controls">
                    <select className="filter-select">
                        <option value="">All</option>
                    </select>
                </div>
            </div>

            <table className="data-table">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    {
                        displayKeys.map((item) => {
                            return <th key={item} style={{textTransform: 'capitalize'}}>{item}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {currentData.length > 0 ? currentData.map((row) => (
                    <TableRow key={row.id} rowData={row} displayKeys={displayKeys}></TableRow>
                )) : <tr>
                    <td colSpan={displayKeys.length + 1} style={{textAlign: 'center'}}>
                        Data not available.
                    </td>
                </tr>}
                </tbody>
            </table>

            {/* Tampilkan pagination hanya jika ada data */}
            {dataSource.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            )}
        </div>
    );
};



export default DataTable;