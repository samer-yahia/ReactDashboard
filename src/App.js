import './App.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Components
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/mainBody/MainDash';




function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainDash />
    </>

  )
  
}

export default App;
