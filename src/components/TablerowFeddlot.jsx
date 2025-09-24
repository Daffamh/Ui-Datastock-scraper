import React from 'react';
import StatusBadge from './StatusBadge'; // Jika masih ingin pakai badge

const TableRowFeedlot = ({ name, address, latitude, longitude }) => {
  return (
    <tr>
      {/* Checkbox */}
      <td><input type="checkbox" /></td>
      
      {/* Nama Feedlot */}
      <td>
        <div className="feedlot-name">
          <strong>{name || '—'}</strong>
        </div>
      </td>
      
      {/* Alamat */}
      <td>
        <div className="feedlot-address">
          {address || '—'}
        </div>
      </td>
      
      {/*(Latitude & Longitude) */}
      <td>
        <div className="lattitude">
          {latitude || '—'}
        </div>
      </td>

      <td>
        <div className="longtitude">
          {longitude || '—'}
        </div>
      </td>
    </tr>
  );
};

export default TableRowFeedlot;