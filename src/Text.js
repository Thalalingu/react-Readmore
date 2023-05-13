import React, { useState } from 'react';

const Text = ({ content, maxChar = 50 }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  

  return (
    <>
      <p>{showMore ? content : `${content.slice(0, maxChar)}...`}</p>
      <button onClick={toggleShowMore}>
        showMor
      </button>
    </>
  );
};

export default Text;
