import { Routes, Route } from 'react-router-dom'; // Ezt importáljuk
import { useAuthModal } from './contexts/AuthModalContext';
import Headbar from './components/Headbar';
import TopSection from './components/TopSection';
import ValueSection from './components/ValueSection';
import CardGrid from './components/CardGrid';

// Ide importáld be a Rólunk oldalt, amit korábban csináltunk!
import AboutPage from './components/AboutPage';

// Létrehozunk egy ideiglenes komponenst a főoldal tartalmának
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
      {/* A Headbar minden oldalon látszani fog, mert a Routes-on KÍVÜL van */}
      <Headbar
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
      />

      {/* Itt dől el, hogy a Headbar alatti részbe mi töltődjön be */}
      <Routes>
        {/* Főoldal */}
        <Route path="/" element={<HomePage />} />

        {/* Rólunk oldal */}
        <Route path="/rolunk" element={<AboutPage />} />

      </Routes>
    </>
  );
}

export default App;