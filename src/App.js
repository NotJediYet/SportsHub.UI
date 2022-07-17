import './App.css';
import Header from './components/UserLayout/Header/Header.js';
import Footer from './components/UserLayout/Footer/Footer.js';
import LeftSideBar from './components/UserLayout/LeftSideBar/LeftSideBar.js';
import RightSideBar from "./components/UserLayout/RightSideBar/RightSideBar";
import MainContentArea from "./components/UserLayout/MainContentArea/MainContentArea";

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