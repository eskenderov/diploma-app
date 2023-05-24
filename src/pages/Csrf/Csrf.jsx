import { useState } from 'react';
import { Tabs } from 'components/Tabs';
import { CsrfContent } from './CsrfContent';
import { Accordions } from 'components/Accordions';
import { pagesData } from 'services/data';
const Injections = () => {
  const [tab, setTab] = useState('safe');
  const content = pagesData['csrf'];
  return (
    <main className="page csrf">
      <h1 className="title">{content.title}</h1>
      <Accordions details={content.details} сonsequences={content.сonsequences}>
        <Tabs activeTab={tab} onChange={setTab} />
        <CsrfContent tab={tab} list={content.methodsList} />
      </Accordions>
    </main>
  );
};

export default Injections;
