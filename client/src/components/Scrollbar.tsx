import React from "react";
import {Scrollbars} from 'react-custom-scrollbars-2';

type ScrollbarProps = {
    className?: string;
    children: React.ReactNode;
    options?: any;
    style?: any;
};


export const Scrollbar: React.FC<ScrollbarProps> = ({
                                                        children,
                                                        className,
                                                        options,
                                                        style,
                                                        ...props
                                                    }) => {
    return (
        <Scrollbars

            style={style}
            className={className}
            {...props}
        >
            {children}
        </Scrollbars>
    );
};
