import React from 'react';
import StatusBadge from './StatusBadge';

const TableRow = ({ image, title, date, amount, status }) => {
  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td><img src={image} alt={title} width="40" /></td>
      <td>{title}</td>
      <td>{date}</td>
      <td>{amount}</td>
      <td><StatusBadge status={status} /></td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;