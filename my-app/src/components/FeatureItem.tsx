import React from 'react';
import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../css/FeatureItem.styles';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const FeatureItem = ({ icon, title, desc }: FeatureItemProps) => (
  <Box sx={styles.container}>

    <Box sx={styles.iconBox}>
      {icon}
    </Box>

    <Typography variant="subtitle2" sx={styles.title}>
      {title}
    </Typography>

    <Typography variant="body2" sx={styles.desc}>
      {desc}
    </Typography>

  </Box>
);

export default FeatureItem;