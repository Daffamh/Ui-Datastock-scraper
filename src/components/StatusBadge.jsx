import React from 'react';

const StatusBadge = ({ status }) => {
  const getStyle = () => {
    switch (status) {
      case 'Danger':
        return { backgroundColor: '#dc3545', color: 'white' };
      default:
        return { backgroundColor: '#6c757d', color: 'white' };
    }
  };

  return (
    <span className="status-badge" style={getStyle()}>
      {status}
    </span>
  );
};

export default StatusBadge;