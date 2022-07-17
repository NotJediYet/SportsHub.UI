import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar.js';
import RightSideBar from "./components/RightSideBar/RightSideBar";
import MainContentArea from "./components/MainContentArea/MainContentArea";

export default function App() {
  return (
    <div>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        <MainContentArea />
        <Footer />
    </div>
  );
}