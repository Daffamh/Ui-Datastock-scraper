// import React, {useState} from 'react';
import TableRow from './TableRow';

const DataTable = ({dataSource, displayKeys}) => {

    return <div className="data-table-container">
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
            {dataSource.length > 0 ? dataSource.map((row) => (
                    <TableRow key={row.id} rowData={row} displayKeys={displayKeys}></TableRow>
                )) : <tr>
                    <td style={{textAlign: 'center'}}>
                        Data not available.
                    </td>
                </tr>}
            </tbody>
        </table>
    </div>;
};


export default DataTable;