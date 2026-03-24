import { useAuthModal } from './contexts/AuthModalContext';
import { Button, Container, Typography, Box } from '@mui/material';

function App() {
  const { openLogin, openRegister } = useAuthModal();

  return (
    <Container sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Kezdőlap
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" onClick={openLogin}>
          Bejelentkezés
        </Button>
        <Button variant="outlined" onClick={openRegister}>
          Regisztráció
        </Button>
      </Box>
    </Container>
  )
}

export default App;