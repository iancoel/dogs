import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Dogs';
    const description = document.querySelector("meta[name='description]");
    if (description)
      description.setAttribute('content', props.description || '');
  }, [props]);

  return <></>;
};

export default Head;
