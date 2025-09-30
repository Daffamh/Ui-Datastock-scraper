import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import FeedlotPage from "./pages/feedlot_page.jsx";
import HomePage from "./pages/home_page.jsx";
import AbattoirPage from "./pages/abattoir_page.jsx";
import LncsPage from "./pages/lncs_page.jsx";
import CattlePage from "./pages/cattle_page.jsx";
import Dashboard_page from "./pages/dashboard_page.jsx";


function App() {
  const [activeMenu, setActiveMenu] = useState('home');
    const renderPage = () => {
        switch (activeMenu) {
            case 'dashboard':
                return <Dashboard_page />;
            case 'feedlot':
                return <FeedlotPage />;
            case 'lncs':
                return <LncsPage />;
            case 'abattoir':
                return <AbattoirPage />;
            case 'cattle':
                return <CattlePage />;
            default:
                return <Dashboard_page />;
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