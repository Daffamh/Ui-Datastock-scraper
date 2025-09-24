import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import FeedlotPage from "./pages/feedlot_page.jsx";
import HomePage from "./pages/home_page.jsx";

function App() {
  const [activeMenu, setActiveMenu] = useState('home');

    const renderPage = () => {
        switch (activeMenu) {
            case 'home':
                return <HomePage />;
            case 'feedlot':
                return <FeedlotPage />;
            default:
                return <HomePage />;
        }
    };

  return (
    <div className="app">
      <Sidebar onMenuClick={setActiveMenu} />
      <div className="main-content">
          {renderPage()}
      </div>
    </div>
  );
}

export default App;