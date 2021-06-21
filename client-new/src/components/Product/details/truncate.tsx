import React, { useState } from 'react';

type ReadMoreProps = {
  more?: string;
  less?: string;
  character: number;
  text:any
};

const ReadMore:React.FC<ReadMoreProps>= ({ text, more, less, character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!text) return null;
  return (
    <>
      {(text && text.length < character) || expanded
        ? text
        : text.substring(0, character)}
      {text && text.length > character && !expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: '#009e7f', fontWeight: 700 }}
            >
              {more}
            </a>
          </span>
        </>
      )}
      {text && text.length > character && expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: '#009e7f', fontWeight: 700 }}
            >
              {less}
            </a>
          </span>
        </>
      )}
    </>
  );
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less',
};

export default ReadMore;
