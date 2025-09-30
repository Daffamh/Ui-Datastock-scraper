// @ts-check
// ^ Hapus baris ini jika tidak ingin pengecekan tipe di JS

import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { fetchDashboard } from '../repository/index.js';

/**
 * @typedef {Object} DashboardData
 * @property {number} total_cattle
 * @property {number} total_cattle_percent
 * @property {number} downloaded_photos
 * @property {number} downloaded_photos_percent
 * @property {number} duplicate_images
 * @property {number} duplicate_images_percent
 * @property {number} total_abattoirs
 * @property {number} total_abattoirs_percent
 */

/**
 * @type {DashboardData}
 */
const initialData = {
    total_cattle: 0,
    total_cattle_percent: 0,
    downloaded_photos: 0,
    downloaded_photos_percent: 0,
    duplicate_images: 0,
    duplicate_images_percent: 0,
    total_abattoirs: 0,
    total_abattoirs_percent: 0,
};

function Dashboard() {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchDashboard();

                // Pastikan response dan data-nya valid
                if (response && typeof response === 'object') {
                    const rawData = response;

                    // Ambil hanya nilai numerik yang valid, fallback ke 0 jika tidak valid
                    const safeData = {
                        total_cattle: typeof rawData.total_cattle === 'number' ? rawData.total_cattle : 0,
                        total_cattle_percent: typeof rawData.total_cattle_percent === 'number' ? rawData.total_cattle_percent : 0,
                        downloaded_photos: typeof rawData.downloaded_photos === 'number' ? rawData.downloaded_photos : 0,
                        downloaded_photos_percent: typeof rawData.downloaded_photos_percent === 'number' ? rawData.downloaded_photos_percent : 0,
                        duplicate_images: typeof rawData.duplicate_images === 'number' ? rawData.duplicate_images : 0,
                        duplicate_images_percent: typeof rawData.duplicate_images_percent === 'number' ? rawData.duplicate_images_percent : 0,
                        total_abattoirs: typeof rawData.total_abattoirs === 'number' ? rawData.total_abattoirs : 0,
                        total_abattoirs_percent: typeof rawData.total_abattoirs_percent === 'number' ? rawData.total_abattoirs_percent : 0,
                    };

                    setData(safeData);
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                // Tetap gunakan initialData agar UI tetap stabil
                setData(initialData);
            } finally {
                setLoading(false);
            }
        };

        void fetchData([]);
    }, []);

    /**
     * @param {number | null | undefined} num
     * @returns {string}
     */
    const formatNumber = (num) => {
        if (num == null || isNaN(num)) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    if (loading) {
        return (
            <div className="dashboard-container">
                <div className="welcome-section">
                    <h1>Loading dashboard...</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <div className="welcome-section">
                <h1>Welcome back! Here's what's happening.</h1>
            </div>

            <div className="cards-container">
                {/* Total Cattle */}
                <div className="data-card">
                    <div className="card-title">Total Cattle</div>
                    <div className="card-content">
                        <div className="number-group">
                            <span className="card-value">{formatNumber(data.total_cattle)}</span>
                            <span className="card-change positive">
                {formatNumber(data.total_cattle_percent)}%
                <span className="change-indicator"></span>
              </span>
                        </div>
                    </div>
                </div>

                {/* Photo Downloaded */}
                <div className="data-card">
                    <div className="card-title">Photo Downloaded</div>
                    <div className="card-content">
                        <div className="number-group">
                            <span className="card-value">{formatNumber(data.downloaded_photos)}</span>
                            <span className="card-change positive">
                {formatNumber(data.downloaded_photos_percent)}%
                <span className="change-indicator"></span>
              </span>
                        </div>
                    </div>
                </div>

                {/* Duplicate Photos */}
                <div className="data-card">
                    <div className="card-title">Duplicate Photos</div>
                    <div className="card-content">
                        <div className="number-group">
                            <span className="card-value">{formatNumber(data.duplicate_images)}</span>
                            <span className="card-change neutral">
                {formatNumber(data.duplicate_images_percent)}%
                <span className="change-indicator neutral"></span>
              </span>
                        </div>
                    </div>
                </div>

                {/* Abattoirs */}
                <div className="data-card">
                    <div className="card-title">Abattoirs</div>
                    <div className="card-content">
                        <div className="number-group">
                            <span className="card-value">{formatNumber(data.total_abattoirs)}</span>
                            <span className="card-change positive">
                {formatNumber(data.total_abattoirs_percent)}%
                <span className="change-indicator"></span>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;