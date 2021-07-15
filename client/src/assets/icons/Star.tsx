import React from 'react';
export const HalfStarIcon:React.FC<{className:string}> = ({className}) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
            className={className}
        >
            <path d="m23.79 9.87-5.36 5.49 1.26 7.77c.111.62-.562 1.074-1.1.78l-6.59-3.65v-20.23c.28 0 .56.13.68.4l3.31 7.05 7.37 1.12c.616.11.843.835.43 1.27z" fill="#eceff1"/><path d="m12 .03v20.23l-6.59 3.65c-.529.297-1.212-.153-1.1-.78l1.26-7.77-5.36-5.49c-.413-.435-.187-1.16.43-1.27l7.37-1.12 3.31-7.05c.12-.27.4-.4.68-.4z" fill="currentColor"/>
        </svg>
    );
};
export default HalfStarIcon