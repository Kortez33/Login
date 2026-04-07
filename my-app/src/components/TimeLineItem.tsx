import React from 'react';
import { Box, Typography } from '@mui/material';
import DecorativeLeaves from './DecorativeLeaves';
import { styles } from '../css/TimeLineItem.styles';

interface TimelineItemProps {
    alignment: 'left' | 'right';
    color: string;
    title?: string;
    content?: string;
    leafPosition?: string;
    isImage?: boolean;
    mt?: number;
    isDarkText?: boolean;
}

const TimelineItem = ({ alignment, color, title, content, leafPosition, isImage, mt, isDarkText }: TimelineItemProps) => {
    const isLeft = alignment === 'left';

    const cardContent = (
        <Box sx={styles.getCardContent(color, isDarkText)}>
            {leafPosition && <DecorativeLeaves sx={styles.getLeafTransform(leafPosition)} />}

            {isImage ? (
                <Box sx={styles.imageWrapper}>
                    <Box sx={styles.imagePlaceholder}>
                        <Typography variant="caption" sx={styles.imageText}>Kép Helye</Typography>
                    </Box>
                </Box>
            ) : (
                <Box sx={styles.textContentWrapper}>
                    {title && <Typography variant="subtitle1" sx={styles.title}>{title}</Typography>}
                    {content && <Typography variant="body2" sx={styles.content}>{content}</Typography>}
                </Box>
            )}
        </Box>
    );

    const connectorLine = (
        <Box sx={styles.connectorLine} />
    );

    return (
        <Box sx={styles.getOuterWrapper(mt)}>
            <Box sx={styles.leftHalfBox}>
                {isLeft && (
                    <>
                        {cardContent}
                        {connectorLine}
                    </>
                )}
            </Box>

            <Box sx={styles.rightHalfBox}>
                {!isLeft && (
                    <>
                        {connectorLine}
                        {cardContent}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default TimelineItem;