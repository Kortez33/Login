export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        px: 1
    },
    iconBox: {
        backgroundColor: '#35933a',
        color: 'white',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'none',
        '& > svg': {
            fontSize: '3rem'
        }
    },
    title: {
        fontWeight: 800,
        mb: 1.5,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        color: '#222'
    },
    desc: {
        color: '#444',
        fontSize: '0.8rem',
        lineHeight: 1.7,
        fontWeight: 400
    }
};