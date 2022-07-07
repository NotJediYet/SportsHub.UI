import './App.css';
import Header from './components/Header.js';
import LeftVerticalMenu from './components/LeftVerticalMenu.js';
import ContentArea from './components/ContentArea';

export default function App() {
  return (
    <div>
      <Header />
      <LeftVerticalMenu />
      <ContentArea />
    </div>
  );
}