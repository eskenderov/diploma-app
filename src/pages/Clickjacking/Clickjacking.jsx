import { useState } from 'react';
import { Tabs } from 'components/Tabs';
import { ClickjackingContent } from './ClickjackingContent';
import { Accordions } from 'components/Accordions';
import { pagesData } from 'services/data';
const Injections = () => {
  const [tab, setTab] = useState('unsafe');
  const content = pagesData['injection'];
  return (
    <main className="page clickjacking">
      <h1 className="title">{content.title}</h1>
      <Accordions details={content.details} сonsequences={content.сonsequences}>
        <Tabs activeTab={tab} onChange={setTab} />
        <ClickjackingContent />
      </Accordions>
    </main>
  );
};

export default Injections;
