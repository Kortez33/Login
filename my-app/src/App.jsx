import { useAuthModal } from './contexts/AuthModalContext';
import Headbar from './components/Headbar';
import TopSection from './components/TopSection';
import ValueSection from './components/ValueSection';
import CardGrid from './components/CardGrid';

function App() {
  const { openLogin, openRegister } = useAuthModal();

  return (
    <>
      <Headbar 
        onLoginClick={openLogin} 
        onRegisterClick={openRegister} 
      />
      
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
}

export default App;