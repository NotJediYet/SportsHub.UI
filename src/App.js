import './App.css';
import AdminLayout from './components/AdminLayout/AdminLayout.js';
import Header from './components/AdminLayout/Header/Header.js';
import LeftVerticalMenu from './components/AdminLayout/LeftVerticalMenu/LeftVerticalMenu.js';
import ContentArea from './components/AdminLayout/ContentArea/ContentArea';

export default function App() {
  return (
    <AdminLayout>
      <Header />
      <LeftVerticalMenu />
      <ContentArea />
    </AdminLayout>
  );
}