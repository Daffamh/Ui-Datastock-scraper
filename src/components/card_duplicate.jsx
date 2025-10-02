
import React, { useState, useEffect } from 'react';
import { fetchDuplicate } from '../repository/index.js';
import './DuplicatePhotoList.css';

const DuplicatePhotosList = () => {
    const [duplicateGroups, setDuplicateGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDuplicates = async () => {
            try {
                const data = await fetchDuplicate();
                if (Array.isArray(data)) {
                    setDuplicateGroups(data);
                } else {
                    throw new Error('Expected an array of duplicate groups');
                }
            } catch (err) {
                setError('Failed to load duplicate photos.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadDuplicates();
    }, []);

    if (loading) {
        return <p className="loading">Loading duplicate photos...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="duplicate-photos-list">
            <h2>Duplicate Photos List ({duplicateGroups.length} groups)</h2>
            {duplicateGroups.length === 0 ? (
                <p>No duplicate photos found.</p>
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
                    {duplicateGroups.map((group, index) => (
                        <tr key={group.hash || index}>
                            <td>{group.hash}</td>
                            <td>{group.count}</td>
                            <td>
                                <ul className="file-list">
                                    {group.paths.map((path, idx) => (
                                        <li key={idx}>{path.split('/').pop()}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DuplicatePhotosList;