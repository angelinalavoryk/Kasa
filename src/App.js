import { Routes, Route } from "react-router-dom";
import './assets/style/_App.scss'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Appartment from './pages/Appartment/Appartment.jsx'


function App() {
    return (
      <div className="kasa">
        <main className="main">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appartement/:id" element={<Appartment />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }


export default App;






