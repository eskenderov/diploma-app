import { useState } from 'react';
import { Tabs } from 'shared/Tabs/Tabs';
import { InjectionsContent } from './InjectionsContent';

const Injections = () => {
  const [tab, setTab] = useState('unsafe');
  return (
    <div className="page injections">
      <h1 className="title">SQL injection</h1>
      <p className="desc">
        <strong>SQL injection (SQLI)</strong> является одной из самых
        распространенных видов атак, которая выходит за рамки традиционных
        техник и методов защиты данных. Она использует вредоносный SQL-код,
        чтобы выполнять несанкционированные действия над базой данных, такие как
        доступ к конфиденциальным данным пользователей, персональные данные
        клиентов и т.д. Успешная атака может иметь серьезные последствия для
        бизнеса, такие как ущерб репутации, потеря клиентов или кража личной
        информации. Веб-сайты являются наиболее уязвимыми целями для этого вида
        атак, но любая база данных SQL может стать жертвой.
      </p>
      <Tabs activeTab={tab} onChange={setTab} />
      <InjectionsContent tab={tab} />
    </div>
  );
};

export default Injections;
