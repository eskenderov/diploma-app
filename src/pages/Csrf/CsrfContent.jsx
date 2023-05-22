import { BrowserWindow } from 'components/BrowserWindow';
import { EditProfile } from 'components/EditProfile';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCSRFToken } from 'services/api/token';
import { useEffect } from 'react';

export const CsrfContent = ({ tab, list }) => {
  useEffect(() => {
    const getToken = async () => {
      const { data } = await getCSRFToken();
      localStorage.setItem('csrfToken', data.csrfToken);
    };
    if (tab === 'safe') getToken();
    else if (tab === 'unsafe') {
      const token = localStorage.getItem('csrfToken');
      if (token) localStorage.removeItem('csrfToken');
    }
  }, [tab]);

  return (
    <div className="csrf-content">
      <BrowserWindow url="https://www.example.com/edit-profile">
        <EditProfile tab={tab} />
      </BrowserWindow>
      <div className="methods">
        <p className="text">
          Злоумышленники могут использовать различные способы, чтобы
          перенаправить пользователей на поддельные сайты. Некоторые из таких
          способов включают:
        </p>
        <ul className="methods__list">
          {list.map(({ id, title, text }) => (
            <Accordion key={id} className="methods__item">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>{title}</h3>
              </AccordionSummary>
              <AccordionDetails>{text}</AccordionDetails>
            </Accordion>
          ))}
        </ul>

        <div className="text">
          Представим что злоумышленику удалось перенаправить вас к поддельному
          сайту.
        </div>
        <BrowserWindow url="https://www.examplle.com/edit-profile">
          <EditProfile tab={tab} disabledToken />
        </BrowserWindow>
      </div>
    </div>
  );
};
