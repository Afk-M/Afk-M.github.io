import React, { useState, useEffect } from 'react';

const TypingEmblem: React.FC = () => {
  const [texts] = useState(['M@', 'Matt']);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false); 

  useEffect(() => {
    if (index >= texts.length - 1 && subIndex === texts[texts.length - 1].length) {
      return;
    }

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? 100 : 400);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <div id="nameEmblem">
        <span>{'>'}</span>
      {texts[index].substring(0, subIndex)}
      <span className="cursor"></span>
    </div>
  );
};

export default TypingEmblem;
