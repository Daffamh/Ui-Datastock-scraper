
import React, { useState, useEffect } from 'react';
import { fetchDuplicate } from '../repository/index.js';
import ImagePopup from './card_popup.jsx';
import './DuplicatePhotoList.css';

const DuplicatePhotosList = () => {
    const [duplicateGroups, setDuplicateGroups] = useState([]);
    const [selectedGroupPaths, setSelectedGroupPaths] = useState(null); // simpan paths, bukan URL

    useEffect(() => {
        const loadDuplicates = async () => {
            try {
                const data = await fetchDuplicate();
                setDuplicateGroups(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Gagal memuat data duplikat:', err);
                setDuplicateGroups([]);
            }
        };
        loadDuplicates();
    }, []);

    const handleGroupClick = (paths) => {
        setSelectedGroupPaths(paths);
    };

    const closePopup = () => setSelectedGroupPaths(null);

    return (
        <div className="duplicate-photos-list">
            <h2>Duplicate Photos List ({duplicateGroups.length} groups)</h2>

            {duplicateGroups.length === 0 ? (
                <p>Tidak ada foto duplikat ditemukan.</p>
            ) : (
                <table className="duplicate-table">
                    <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Jumlah File</th>
                        <th>Daftar File</th>
                    </tr>
                    </thead>
                    <tbody>
                    {duplicateGroups.map((group, idx) => (
                        <tr
                            key={group.hash || idx}
                            className="duplicate-group-row"
                            onClick={() => handleGroupClick(group.paths)}
                        >
                            <td>{group.hash}</td>
                            <td>{group.count}</td>
                            <td>
                                <ul className="file-list">
                                    {group.paths.map((path, i) => (
                                        <li key={i}>{path.split('/').pop()}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            {selectedGroupPaths && (
                <ImagePopup images={selectedGroupPaths} onClose={closePopup} />
            )}
        </div>
    );
};

export default DuplicatePhotosList;