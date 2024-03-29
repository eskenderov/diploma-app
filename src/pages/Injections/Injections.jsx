import { useState } from 'react';
import { Tabs } from 'components/Tabs';
import { InjectionsContent } from './InjectionsContent';
import { Accordions } from 'components/Accordions';
import { pagesData } from 'services/data';
const Injections = () => {
  const [tab, setTab] = useState('unsafe');
  const content = pagesData['injection'];
  return (
    <div className="page injections">
      <h1 className="title">{content.title}</h1>
      <Accordions details={content.details} сonsequences={content.сonsequences}>
        <Tabs activeTab={tab} onChange={setTab} />
        <InjectionsContent tab={tab} />
      </Accordions>
    </div>
  );
};

export default Injections;
