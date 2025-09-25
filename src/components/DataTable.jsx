import React, { useState, useEffect } from 'react';

// Impor konfigurasi dari file terpisah
import { 
  FETCH_FUNCTIONS, 
  TABLE_HEADERS, 
  ROW_COMPONENTS 
} from '../config/tableConfig';

const DataTable = ({ activeMenu }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData([]);
    setError(null);

    const fetchFunction = FETCH_FUNCTIONS[activeMenu];
    if (!fetchFunction) return;

    setLoading(true);

    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        if (!Array.isArray(result)) {
          throw new Error('Data tidak dalam format array');
        }

        // Filter duplikat berdasarkan id
        const uniqueData = Array.from(
          new Map(result.map(item => [item.id, item])).values()
        );

        setData(uniqueData);
      } catch (err) {
        console.error(`Error fetching ${activeMenu}:`, err);
        setError(err.message || 'Gagal memuat data');
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeMenu]);

  // UI: loading / error
  if (loading) return <div className="data-table-container">Loading {activeMenu}...</div>;
  if (error) return <div className="data-table-container">Error: {error}</div>;
  if (!FETCH_FUNCTIONS[activeMenu]) {
    return (
      <div className="data-table-container">
        <h3>Selamat datang di Austrex Dashboard</h3>
        <p>Pilih menu di sidebar untuk melihat data.</p>
      </div>
    );
  }

  const headers = TABLE_HEADERS[activeMenu] || (data[0] ? Object.keys(data[0]) : []);
  const RowComponent = ROW_COMPONENTS[activeMenu];

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
            {headers.map(header => (
              <th key={header}>
                {header
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, l => l.toUpperCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(row => <RowComponent key={row.id} {...row} />)
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