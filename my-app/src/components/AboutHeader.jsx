import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FeatureItem from './FeatureItem';
import { featuresData } from '../data/AboutData';
import { styles } from '../css/AboutHeader.styles';

const AboutHeader = () => {
    return (
        <Box sx={styles.wrapper}>
            <Container maxWidth="md" sx={styles.headerContainer}>
                <Typography variant="h3" component="h1" sx={styles.mainTitle}>
                    30 Éve az élvonalban
                </Typography>

                <Box sx={styles.textWrapper}>
                    <Typography>
                        A kilencvenes évek közepén, a hazai zöld mozgalom első aranykorában születtünk meg mi is.
                        A piacgazdaság dübörgött, a hulladékhegyek velünk együtt nőttek, a régi visszaváltási rendszerek eltűntek...
                    </Typography>
                    <Typography>
                        Ma 8 rendes és számos pártoló tagszervezet szövetségeként működünk, akikkel aktívan közreműködünk
                        a hulladékmegelőzés, a fenntartható fogyasztás és a komposztálás népszerűsítésében.
                    </Typography>
                    <Typography>
                        Otthonunk, a XI. kerületi Humusz Ház egy igazi városi zöld oázis, ahol programokkal,
                        képzésekkel és valódi zöld elhivatottsággal dolgozunk egy tisztább jövő megteremtéséért.
                    </Typography>
                </Box>

                <Typography variant="h6" sx={styles.subtitle}>
                    Mert a teljes élet nulla hulladékkal kezdődik
                </Typography>
            </Container>

            <Container maxWidth="xl">
                <Box sx={styles.iconGridWrapper}>
                    {featuresData.map((feature) => (
                        <Box key={feature.id} sx={styles.iconItemWrapper}>
                            <FeatureItem
                                icon={feature.icon}
                                title={feature.title}
                                desc={feature.desc}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default AboutHeader;