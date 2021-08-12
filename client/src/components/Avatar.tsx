import React from 'react';
import styled from "styled-components";

const Initials = styled.div<{ width: string, height: string }>`
  color: white;
  border-radius: 50%;
  text-align: center;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-right: 12px;
  background: #21C5C5;

  .initials {
    font-size: calc(${props => props.width} / 2); /* 50% of parent */
    line-height: 1;
    position: relative;
    top: calc(${props => props.width} / 4); /* 25% of parent */
  }
`
const Avatar: React.FC<{ children: any, width: string, height: string }> = ({children, width, height}) => {
    return (
        <Initials width={width} height={height}>
            <div className="initials">

                {children}
            </div>

        </Initials>
    );
};

export default Avatar;