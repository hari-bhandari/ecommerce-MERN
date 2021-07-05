import styled from "styled-components";
import css from "@styled-system/css";

export const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',

        '@media screen and (min-width: 440px)': {
            gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
            gridGap: '20px',
        },

        '@media screen and (min-width: 991px)': {
            gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
            gridGap: '30px',
        },

        '@media screen and (min-width: 1100px)': {
            gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 1700px)': {
            gridTemplateColumns: 'repeat(4, minmax(240px, 1fr))',
        },

        '@media screen and (min-width: 2200px)': {
            gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))',
        },
    })
);
