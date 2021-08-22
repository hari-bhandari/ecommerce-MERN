import {createGlobalStyle} from 'styled-components';
import {get} from 'styled-system';
import css from '@styled-system/css';

export const GlobalStyle = createGlobalStyle(({theme}) =>
    css({
        '*, *::before, *::after': {
            boxSizing: 'border-box',
        },
        body: {
            margin: 0,
            fontFamily: 'body',
            fontWeight: 'regular',
            fontSize: 'base',
            lineHeight: '1.5',
            backgroundColor: 'white',
            transition: get(theme, 'customs.transition'),
        },
        h1: {
            fontFamily: 'heading',
            fontSize: '5xl',
            margin: 0,
        },
        h2: {
            fontFamily: 'heading',
            fontSize: '3xl',
            margin: 0,
        },
        h3: {
            fontFamily: 'heading',
            fontSize: '2xl',
            margin: 0,
        },
        h4: {
            fontFamily: 'heading',
            fontSize: 'xl',
            margin: 0,
        },
        h5: {
            fontFamily: 'heading',
            fontSize: 'md',
            margin: 0,
        },
        h6: {
            fontFamily: 'heading',
            fontSize: 'base',
            margin: 0,
        },
        'body > div:nth-child(14)':{
            zIndex:999999999
        },
        'p,span,button,li,div': {
            fontFamily: 'body',
            margin: 0,
        },
        a: {
            fontFamily: 'body',
            textDecoration: 'none',
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
        '.image-item': {
            padding: '0 15px',
        },
        '.leftSideBar':{
            marginTop:'90px'
        },

        '@media (max-width: 1199px) and (min-width: 991px)': {
            '.image-item': {
                paddingLeft: '10px',
                paddingRight: '10px',
            },
        },

        '@media (max-width: 768px)': {
            '.image-item': {
                paddingLeft: '7.5px',
                paddingRight: '7.5px',
            },
        },

        '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
            marginBottom: '0 !important',
            paddingBottom: '0 !important',

            th: {
                padding: '8px 20px',
            },
        },

        '.drawer-content-wrapper': {
            '*:focus': {
                outline: 'none',
            },
        },

        '.rc-table-content': {
            border: 0,
        },
        //@ts-ignore
    })
);
