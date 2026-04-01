import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { styles } from '../css/DecorativeLeaves.styles';

interface DecorativeLeavesProps {
    sx?: SxProps<Theme>;
}

const DecorativeLeaves = ({ sx }: DecorativeLeavesProps) => (
    <Box
        component="svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={[styles.base, sx]}
    >
        <path d="M30 80 C 10 70, 0 40, 20 20 C 40 10, 60 30, 50 60 C 45 75, 35 80, 30 80 Z" fill="#8bc53f" />
        <path d="M45 85 C 30 65, 35 30, 60 10 C 85 -5, 100 25, 85 55 C 75 75, 55 90, 45 85 Z" fill="#569e3d" />
    </Box>
);

export default DecorativeLeaves;