import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './styles/app.css'
import MainSection from './components/MainSection/MainSection';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Hero />
      <div className="app-container">
        <Navbar />
        <MainSection />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
