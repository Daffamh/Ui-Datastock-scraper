import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">🔍</button>
      </div>
      <div className="header-right">
        <button className="settings-btn">⚙️</button>
        <button className="menu-btn">☰</button>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="profile-img" />
      </div>
    </header>
  );
};

export default Header;