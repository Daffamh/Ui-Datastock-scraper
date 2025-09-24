import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import './index.css'
import Dashboard from './components/DataTable.jsx'
// import "./index.css"
// import App from './App'
createRoot(document.getElementById('root')).render(
  <div>
    <App />
    {/* <Dashboard /> */}
  </div>
)
