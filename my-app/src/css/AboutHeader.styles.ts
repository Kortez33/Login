export const styles = {
    wrapper: {
        pt: 8,
        pb: 8
    },
    headerContainer: {
        textAlign: 'center',
        mb: 10
    },
    mainTitle: {
        fontWeight: 900,
        mb: 5,
        textTransform: 'uppercase',
        letterSpacing: 4,
        color: 'text.primary',
        fontSize: { xs: '2rem', md: '2.5rem' }
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        color: 'text.secondary',
        fontWeight: 500,
        maxWidth: '800px',
        mx: 'auto',
        fontSize: '0.95rem',
        lineHeight: 1.8
    },
    subtitle: {
        mt: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: 'text.primary'
    },
    iconGridWrapper: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: { xs: 4, md: 2, lg: 4 }
    },
    iconItemWrapper: {
        width: { xs: '100%', sm: '45%', md: '18%' },
        maxWidth: '250px'
    }
};