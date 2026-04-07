export const styles = {
    container: {
        pb: 12
    },
    headerBox: {
        textAlign: 'center',
        mb: 8,
        mt: 4
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 4,
        color: 'text.primary',
        fontFamily: '"Courier New", Courier, monospace',
        textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
    },
    timelineWrapper: {
        position: 'relative',
        pt: 4,
        pb: 10,
        maxWidth: '800px',
        mx: 'auto'
    },
    centerLine: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '2px',
        backgroundColor: '#333',
        height: '100%',
        zIndex: 0,
        top: 0
    }
};