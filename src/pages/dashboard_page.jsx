
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { fetchDashboard } from '../repository/index.js';
import DataCard from '../components/card_dashboard.jsx';
import DuplicatePhotosList from '../components/card_duplicate.jsx';

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
                setData(response);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setData(initialData);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                <h1>Data Dashboard Austrex.</h1>
            </div>

            <div className="cards-container">
                <DataCard
                    title="Total Cattle"
                    value={data.total_cattle}
                    percent={data.total_cattle_percent}
                    trend="positive"
                />
                <DataCard
                    title="Photo Downloaded"
                    value={data.downloaded_photos}
                    percent={data.downloaded_photos_percent}
                    trend="positive"
                />
                <DataCard
                    title="Duplicate Photos"
                    value={data.duplicate_images}
                    percent={data.duplicate_images_percent}
                    trend="neutral"
                />
                <DataCard
                    title="Abattoirs"
                    value={data.total_abattoirs}
                    percent={data.total_abattoirs_percent}
                    trend="positive"
                />
            </div>
            <br/>

            <DuplicatePhotosList />
        </div>
    );
}

export default Dashboard;