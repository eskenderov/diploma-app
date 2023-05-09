import React from 'react';
import { Comments } from 'components/Comments/Comments';

export const XssContent = ({ tab }) => {
  return (
    <div className="xss-content">
      <Comments tab={tab} />
    </div>
  );
};
