import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import type { ReactNode } from 'react';

interface FeatureData {
    id: number;
    icon: ReactNode;
    title: string;
    desc: string;
}

export interface TimelineItemData {
    id: number;
    alignment: 'left' | 'right';
    color: string;
    leafPosition?: string;
    mt: number;
    title?: string;
    content?: string;
    isImage?: boolean;
    isDarkText?: boolean;
}

export const featuresData: FeatureData[] = [
    {
        id: 1,
        icon: <MenuBookIcon fontSize="large" />,
        title: "TÖRTÉNETÜNK",
        desc: "Egyszer volt, hol nem volt, egy Szövetség, akik úgy döntöttek, felszólalnak amiatt, hogy a hulladék ne csak mese, és lehessen happy end a vége."
    },
    {
        id: 2,
        icon: <GroupsIcon fontSize="large" />,
        title: "CSAPATUNK",
        desc: "Nem szuperhősök vagyunk, csak zöld lelkesedéssel és hittel teli civil szervezeti emberek, akik hisznek a fenntartható jövőben."
    },
    {
        id: 3,
        icon: <HomeIcon fontSize="large" />,
        title: "A HUMUSZ HÁZ",
        desc: "Egy zöld oázis a beton-dzsungel sűrűjében, ahol madárcsicsergés mellett tanulhatsz, és leadhatod komposztodat is."
    },
    {
        id: 4,
        icon: <HandshakeIcon fontSize="large" />,
        title: "PARTNEREINK",
        desc: "A munka nem áll meg a Humusz Ház ajtaja előtt, együtt dolgozunk vállalatokkal, önkormányzatokkal és más civilekkel, mert együtt tudunk tisztább jövőt építeni."
    },
    {
        id: 5,
        icon: <TrendingUpIcon fontSize="large" />,
        title: "TÁMOGATÓINK",
        desc: "Ők azok, akik nélkül sok ötletünk a fiókban porosodna, helyette viszont virágzik a zöld ügy, mert a támogatásukból új programok, kampányok és remények nőnek."
    }
];

export const timelineData: TimelineItemData[] = [
    {
        id: 1, alignment: "right", color: "#489d44", leafPosition: "top-right", mt: 0,
        title: "ALAKULÁSUNK",
        content: "A '90-es évek zöld aranykorában egy csapat lelkes aktivista úgy döntött, ideje összefogni a hulladékmegelőzés és -kezelés ügyéért. Ezzel megszületett a Hulladék Munkaszövetség."
    },
    {
        id: 2, alignment: "left", color: "#95ce5e", leafPosition: "top-left", mt: -6, // Finomabb eltolás
        content: "Országszerte előadásokat tartottunk, iskolákba vittünk környezetvédelmi programokat, és kiadványokkal segítettük a szemléletformálást. A gyerekek pedig megtanulták: a szemét nem a kukában kezdődik, hanem a boltokban.",
        isDarkText: true
    },
    { id: 3, alignment: "right", color: "#dff0f4", isImage: true, mt: -6 },
    { id: 4, alignment: "left", color: "#dff0f4", isImage: true, leafPosition: "bottom-left", mt: -6 },
    { id: 5, alignment: "right", color: "#489d44", mt: -6 },
    { id: 6, alignment: "left", color: "#489d44", mt: -6, leafPosition: "bottom-left" },
    { id: 7, alignment: "right", color: "#95ce5e", mt: -6 }
];