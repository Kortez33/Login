export const styles = {
    connectorLine: {
        width: { xs: '20px', md: '40px' },
        height: '2px',
        backgroundColor: '#333',
        zIndex: 1
    },
    imageWrapper: {
        position: 'absolute',
        inset: 12,
        backgroundColor: 'white',
        borderRadius: '28px 12px 28px 12px',
        overflow: 'hidden'
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #e0f2fe, #dcfce7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageText: {
        color: 'text.secondary',
        fontWeight: 'medium'
    },
    textContentWrapper: {
        position: 'relative',
        zIndex: 20,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        mb: 1,
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    content: {
        lineHeight: 1.6,
        fontWeight: 500
    },
    leftHalfBox: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rightHalfBox: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    getOuterWrapper: (mt: number | undefined) => ({
        display: 'flex',
        width: '100%',
        mt: mt || 0,
        position: 'relative'
    }),

    getCardContent: (color: string, isDarkText?: boolean) => ({
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        p: 3,
        minHeight: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: color,
        color: isDarkText ? 'text.primary' : 'white',
        borderRadius: '40px 20px 40px 20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        zIndex: 2,
    }),

    getLeafTransform: (leafPosition: string | undefined) => {
        switch (leafPosition) {
            case 'top-right': return { top: -20, right: -20, transform: 'rotate(45deg)' };
            case 'top-left': return { top: -20, left: -20, transform: 'scaleX(-1) rotate(45deg)' };
            case 'bottom-left': return { bottom: -20, left: -12, transform: 'scaleX(-1) rotate(-135deg)' };
            default: return {};
        }
    }
};