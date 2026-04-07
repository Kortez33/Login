import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TimelineItem from './TimeLineItem';
import { timelineData } from '../data/AboutData';
import { styles } from '../css/Leaves.styles';

const Leaves = () => {
    return (
        <Container maxWidth="md" sx={styles.container}>
            <Box sx={styles.headerBox}>
                <Typography variant="h4" sx={styles.title}>
                    Humusz Történelem
                </Typography>
            </Box>

            <Box sx={styles.timelineWrapper}>
                <Box sx={styles.centerLine} />

                {timelineData.map((item) => (
                    <TimelineItem
                        key={item.id}
                        alignment={item.alignment}
                        color={item.color}
                        leafPosition={item.leafPosition}
                        mt={item.mt}
                        title={item.title}
                        content={item.content}
                        isImage={item.isImage}
                        isDarkText={item.isDarkText}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default Leaves;