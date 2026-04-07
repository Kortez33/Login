import { useRegister } from '../hooks/useRegister';
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

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

export const RegisterModal = ({ open, onClose, onSwitchToLogin }: RegisterModalProps) => {
    const {
        username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, error, isLoading, handleRegister
    } = useRegister(onClose);

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
                <Typography component="h2" variant="h5" mb={3} align="center">
                    Új fiók létrehozása
                </Typography>

                <Box component="form" onSubmit={handleRegister}>
                    <TextField
                        margin="normal" required fullWidth label="Felhasználónév"
                        value={username} onChange={(e) => setUsername(e.target.value)} disabled={isLoading}
                    />
                    <TextField
                        margin="normal" required fullWidth label="Jelszó" type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading}
                    />
                    <TextField
                        margin="normal" required fullWidth label="Jelszó megerősítése" type="password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={isLoading}
                    />

                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                        <Button onClick={onClose} fullWidth variant="outlined" disabled={isLoading} sx={{ height: '48px' }}>
                            Mégse
                        </Button>
                        <Button type="submit" fullWidth variant="contained" disabled={isLoading} sx={{ height: '48px' }}>
                            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Regisztrálok'}
                        </Button>
                    </Box>

                    <Divider sx={{ my: 3 }}>VAGY</Divider>

                    <Button fullWidth variant="text" onClick={onSwitchToLogin} disabled={isLoading}>
                        Már van fiókod? Lépj be!
                    </Button>
                </Box>
            </Paper>
        </Modal>
    );
};