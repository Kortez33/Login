import { useLogin } from '../hooks/useLogin';
import {
  Box, Button, TextField, Typography, Paper, Alert,
  CircularProgress, Modal, Divider
} from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none',
};

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export const LoginModal = ({ open, onClose, onSwitchToRegister }: LoginModalProps) => {
  const {
    username, setUsername,
    password, setPassword,
    error, isLoading, handleLogin
  } = useLogin(onClose);
  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(6px)',
          },
        },
      }}
    >
      <Paper sx={modalStyle} elevation={24}>
        <Typography component="h1" variant="h5" align="center" mb={2}>
          Bejelentkezés
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            margin="normal" required fullWidth
            label="Felhasználónév"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
          <TextField
            margin="normal" required fullWidth
            label="Jelszó" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <Button
            type="submit" fullWidth variant="contained"
            sx={{ mt: 3, mb: 2, height: '48px' }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Belépés'}
          </Button>

          <Divider sx={{ my: 2 }}>VAGY</Divider>

          <Button
            fullWidth variant="text"
            onClick={onSwitchToRegister}
            disabled={isLoading}
          >
            Nincs még fiókod? Regisztrálj!
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};