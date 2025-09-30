// src/components/SideBar.jsx
import React from 'react';

const Sidebar = ({ onMenuClick }) => { // ✅ Terima prop di sini
  const menuItems = [
      {id: "dashboard",icon:'📊', label: 'Dashboard' },
      { id: "feedlot", icon: '📄', label: 'Feedlot' },
      { id: "lncs", icon: '📄', label: 'Lncs' },
      { id: "abattoir", icon: '📄', label: 'Abattoirs' },
      { id: "cattle", icon: '📄', label: 'Cattles' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">Austrex</div>
      <nav className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => onMenuClick(item.id)} // ✅ Sekarang onMenuClick tersedia
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;