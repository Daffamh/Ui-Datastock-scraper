
import React from 'react';
import './popup.css';

const ImagePopup = ({ images, onClose }) => {
    if (!images || images.length === 0) return null;

    const toImageUrl = (relativePath) => {
        const imageUrl = relativePath.replace(/^data\/images\//, '/images/');
        return `http://localhost:3000${imageUrl}`;
    };

    return (
        <div className="image-popup-overlay" onClick={onClose}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="image-side-by-side">
                    {images.slice(0, 2).map((path, idx) => (
                        <img
                            key={idx}
                            src={toImageUrl(path)}
                            alt={`Gambar ${idx + 1}`}
                            className="side-image"
                            onError={(e) => {
                                e.target.src = '/images/placeholder.png';
                                console.error('Gagal muat:', path);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagePopup;