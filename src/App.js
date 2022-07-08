import './App.css';
import Header from './components/Header/Header.js';
import LeftVerticalMenu from './components/LeftVerticalMenu/LeftVerticalMenu.js';
import ContentArea from './components/ContentArea/ContentArea';

export default function App() {
  return (
    <div>
      <Header />
      <LeftVerticalMenu />
      <ContentArea />
    </div>
  );
}