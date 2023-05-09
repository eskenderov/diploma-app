import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Accordions = ({ details, сonsequences, children }) => {
  return (
    <div className="accordions">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Принцип работы</h3>
        </AccordionSummary>
        <AccordionDetails>
          {details.map((value, index) => (
            <p className="desc" key={index}>
              {value}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Последствия</h3>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="accordions__list">
            {сonsequences.map(({ label, text }, index) => (
              <li className="accordions__item" key={index}>
                <span className="circle" /> <strong>{label}</strong>
                <div>{text}</div>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
      {children && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Пример</h3>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};
