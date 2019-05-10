import React from 'react';

const getIndexMax = props => {
  const { children, visibleSlidesCount } = props;

  return React.Children.count(children) - visibleSlidesCount;
};

export default getIndexMax;
