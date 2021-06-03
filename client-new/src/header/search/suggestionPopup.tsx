import React, { useState, useEffect, useRef } from 'react';
import useOnClickOutside from "@/components/popover/useOnClickOutside";
import PopoverWrapper from "./popup.style";
type PopoverProps = {
    className?: string;
    content: React.ReactNode;
    handleToggle?: () => void;
};

const SuggestionPopup: React.FC<PopoverProps> = ({
                                             className,
                                             content,
                                         }) => {
    // Popover State
    const [state, setState] = useState(true);

    // Ref
    const ref = useRef();

    // Add all classs to an array
    const addAllClasses: string[] = ['popover-wrapper','left'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);

    }


    // Toggle Popover content
    const handleToggle = (e:any) => {
        e.stopPropagation();
        setState((state) => !state);
    };

    // Handle document click
    const handleDocumentClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        if (state) {
            handleToggle(e);
        }
    };

    // Handle window event listener
    useEffect(() => {
        window.addEventListener('click', handleDocumentClick);
        return () => {
            window.removeEventListener('click', handleDocumentClick);
        };
    });

    // Close popover on click outside
    useOnClickOutside(ref, () => setState((state) => false));

    return (
        // @ts-ignore

        <PopoverWrapper className={addAllClasses.join(' ')} ref={ref}>
            {state && (
                <div className="popover-content">
                    {content && (
                        <div className="inner-wrap" onClick={handleToggle}>
                            {content}
                        </div>
                    )}
                </div>
            )}
        </PopoverWrapper>
    );
};

export default SuggestionPopup;
