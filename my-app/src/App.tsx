import { Routes, Route } from 'react-router-dom';
import { useAuthModal } from './contexts/AuthModalContext';
import Headbar from './components/Headbar';
import TopSection from './components/TopSection';
import ValueSection from './components/ValueSection';
import CardGrid from './components/CardGrid';

import AboutPage from './components/AboutPage';


const HomePage = () => (
  <>
    <TopSection
      imageUrl="/images/top-image.png"
      text="Szolgáltatásaink cégeknek, intézményeknek"
    />
    <ValueSection />
    <main>
      <CardGrid />
    </main>
  </>
);

function App() {
  const { openLogin, openRegister } = useAuthModal();

  return (
    <>
      <Headbar
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/rolunk" element={<AboutPage />} />

      </Routes>
    </>
  );
}

export default App;