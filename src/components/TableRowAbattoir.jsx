// src/components/TableRowAbattoir.jsx
const TableRowAbattoir = ({ name, address, latitude, longitude }) => {
  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{name}</td>
      <td>{address || '—'}</td>
      <td>{latitude || '—'}</td>
      <td>{longitude || '—'}</td>
    </tr>
  );
};

export default TableRowAbattoir;