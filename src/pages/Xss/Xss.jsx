import React, { useState } from 'react';
import { Tabs } from 'components/Tabs';
import { XssContent } from './XssContent';
import { pagesData } from 'services/data';
import { Accordions } from 'components/Accordions';

const Xss = () => {
  const [tab, setTab] = useState('unsafe');
  const content = pagesData['xss'];
  return (
    <div className="page injections">
      <h1 className="title">{content.title}</h1>
      <Accordions details={content.details} сonsequences={content.сonsequences}>
        <Tabs activeTab={tab} onChange={setTab} />
        <XssContent tab={tab} />
      </Accordions>
    </div>
  );
};

export default Xss;
