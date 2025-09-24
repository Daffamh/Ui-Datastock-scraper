// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import DataTable from './components/DataTable';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div className="app">
      <Sidebar onMenuClick={setActiveMenu} />
      <div className="main-content">
        <DataTable activeMenu={activeMenu} />
      </div>
    </div>
  );
}

export default App;