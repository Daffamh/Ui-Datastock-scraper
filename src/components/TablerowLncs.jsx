import React from 'react';
import StatusBadge from './StatusBadge'; // Jika masih ingin pakai badge

const TableRowLncs = ({ name, packing_list_number, actual_number}) => {
  return (
    <tr>
      {/* Checkbox */}
      <td><input type="checkbox" /></td>
      
      {/* Nama Feedlot */}
      <td>
        <div className="lncs-name">
          <strong>{name || '—'}</strong>
        </div>
      </td>
      
      {/* Alamat */}
      <td>
        <div className="lncs-packinf-list-number">
          {packing_list_number || '—'}
        </div>
      </td>
      
      {/*(Latitude & Longitude) */}
      <td>
        <div className="actual-number">
          {actual_number || '—'}
        </div>
      </td>
    </tr>
  );
};

export default TableRowLncs;