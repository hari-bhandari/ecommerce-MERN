import React from 'react';

export const JPFlag = ({width = '100%', height = '100%'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" height={height} width={width}>
            <path fill="#fff" d="M0 0h900v600H0z"/>
            <circle fill="#bc002d" cx="450" cy="300" r="180"/>
        </svg>
    );
};
