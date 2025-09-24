import React from 'react';

const TableRow = ({rowData, displayKeys}) => {
    return (
        <tr>
            <td><input type="checkbox"/></td>
            {
                displayKeys.map(key => {
                    const value = rowData[key];
                    return (
                        <td key={key}>
                            {value}
                        </td>
                    );
                })
            }
        </tr>
    );
};

export default TableRow;