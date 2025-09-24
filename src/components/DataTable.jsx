import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import TableRowFeedlot from './TablerowFeddlot';
import TableRowLncs from './TablerowLncs';
import { 
  fetchFeedlots,
  fetchAbattoirs,
  fetchlncs 
} from '../repository';

const FETCH_FUNCTIONS = {
  feedlot: fetchFeedlots,
  abattoir: fetchAbattoirs,
  lncs: fetchlncs,
  // cattles: fetchCattles,
};

// Mapping header kolom (sesuaikan dengan respons API-mu)
const TABLE_HEADERS = {
  feedlot: ['name', 'address', 'Latitude', 'Longitude'],
  abattoir: ['name', 'address', 'Latitude', 'Longitude'],
  lncs: ['name', 'packing_list_number', 'actual_number'],
  // tambahkan lainnya
};

const DataTable = ({ activeMenu }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  const uniqueData = Array.from(
    new Map(data.map(item => [item.id, item])).values()
  );
setData(uniqueData);
    setData(uniqueData);
    setData([]);
    setError(null);

    const fetchFunction = FETCH_FUNCTIONS[activeMenu];
    if (!fetchFunction) {
      return; // misal: menu "home"
    }

    setLoading(true);

    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(Array.isArray(result) ? result : []);
      } catch (err) {
        console.error(`Error fetching ${activeMenu}:`, err);
        setError(err.message || 'Terjadi kesalahan saat mengambil data');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeMenu]);

  // UI: loading, error, atau konten
  if (loading) {
    return <div className="data-table-container">Loading {activeMenu}...</div>;
  }

  if (error) {
    return <div className="data-table-container">Error: {error}</div>;
  }

  if (!FETCH_FUNCTIONS[activeMenu]) {
    return (
      <div className="data-table-container">
        <h3>Selamat datang di Austrex Dashboard</h3>
        <p>Pilih menu di sidebar untuk melihat data.</p>
      </div>
    );
  }

  const headers = TABLE_HEADERS[activeMenu] || (data[0] ? Object.keys(data[0]) : []);

  return (
    <div className="data-table-container">
      <div className="table-header">
        <div className="filter-controls">
          <select className="filter-select">
            <option value="">All</option>
          </select>
          <input
            type="text"
            placeholder={`Search in ${activeMenu}...`}
            className="search-input"
          />
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            {headers.map((header) => (
              <th key={header}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
            <>
            <TableRowFeedlot key={row.id} {...row} />,
            <TableRowLncs key={row.id} {...row} />,
            </>
          ))
          ) : (
            <tr>
              <td colSpan={headers.length + 1} style={{ textAlign: 'center' }}>
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


export default DataTable;