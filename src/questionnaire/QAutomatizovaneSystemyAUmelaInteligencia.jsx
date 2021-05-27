import { useEffect } from 'react';
import { Popover } from 'react-bootstrap';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'automatizovane_systemy',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p>
        <b>Automatizované spracúvanie</b> osobných údajov je spravidla vykonávané s&nbsp;pomocou informačných systémov, tj. prostredníctvom
        software, ktorý v&nbsp;rámci činnosti automatizovane uplatňuje vlastnú rozhodovaciu logiku. Zjednodušene možno za{' '}
        <i>&bdquo;automatizované&ldquo;</i> spracúvanie považovať také činnosti, ktoré sú vykonávané prostredníctvom výpočetnej techniky.
      </p>
    </Popover.Content>
  </Popover>
);

export const QAutomatizovaneSystemyAUmelaInteligencia = ({ state, setState }) => {
  useEffect(() => {
    if (state === undefined) {
      setState(DEFAULT_STATE);
    }
  });
  const value = state && state.value;

  const onChange = (ev) => {
    setState({ ...state, value: ev.target.value, valid: true });
  };

  return (
    <>
      <QuestionnaireCard title="Sú pre realizáciu spracúvania využívané automatizované systémy vrátane umelej inteligencie?">
        <CardRadioButton id="yes" value="yes" radioGroupValue={value} text="áno" popover={popover} onChange={onChange} />
        <CardRadioButton
          id="no"
          value="no"
          radioGroupValue={value}
          text="nie"
          mutedText="vykonávané činnosti spracúvania údajov využívajú jednoduché zreťazenie základných operácií postavených na princípe ľahko realizovateľného a pochopiteľného výpočtového algoritmu "
          onChange={onChange}
        />
      </QuestionnaireCard>
    </>
  );
};
