import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import MainContent from './Component/Main-Content/MainContent';
import SidebarLeft from './Component/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarRight from './Component/Sidebar/SidebarRight';
import Timeline from './Pages/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SidebarLeft />
        <SidebarRight />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
