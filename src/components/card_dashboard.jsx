// src/components/DataCard.jsx
import React from 'react';

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {number} props.value
 * @param {number} props.percent
 * @param {'positive' | 'neutral' | 'negative'} [props.trend='positive']
 */
function DataCard({ title, value, percent, trend = 'positive' }) {
    /**
     * @param {number | null | undefined} num
     * @returns {string}
     */
    const formatNumber = (num) => {
        if (num == null || isNaN(num)) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="data-card">
            <div className="card-title">{title}</div>
            <div className="card-content">
                <div className="number-group">
                    <span className="card-value">{formatNumber(value)}</span>
                    <span className={`card-change ${trend}`}>
                        {formatNumber(percent)}%
                        <span className={`change-indicator ${trend === 'neutral' ? 'neutral' : ''}`}></span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DataCard;