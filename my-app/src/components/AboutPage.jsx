import React from 'react';
import { Box } from '@mui/material';
import AboutHeader from '../components/AboutHeader';
import Leaves from '../components/Leaves';
import { styles } from '../css/AboutPage.styles';

const AboutPage = () => {
    return (
        <Box sx={styles.container}>
            <AboutHeader />
            <Leaves />
        </Box>
    );
};

export default AboutPage;