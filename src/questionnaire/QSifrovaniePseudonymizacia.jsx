import { useEffect } from 'react';
import { Popover } from 'react-bootstrap';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'sifrovanie_pseudonymizacia',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p>
        <b>Šifrovanie</b> osobných údajov sa využíva najmä pri uchovávaní a&nbsp;pri prenose údajov v&nbsp;elektronickej podobe. Tento
        proces umožňuje ukryť obsah uchovávaných či prenášaných údajov pred nepovolanou osobou.
      </p>
      <p>
        <b>Pseudonymizácia</b> osobných údajov je proces umožňujúci z&nbsp;pôvodne zaznamenaných údajov o&nbsp;dotknutej osobe vytvoriť také
        údaje, na základe ktorých nebude možné bez znalosti dodatočnej informácie túto osobu identifikovať.
      </p>
    </Popover.Content>
  </Popover>
);

export const QSifrovaniePseudonymizacia = ({ state, setState }) => {
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
      <QuestionnaireCard title="Sú spracúvané osobné údaje podrobené procesu šifrovania a/alebo pseudonymizácie?" popover={popover}>
        <CardRadioButton id="yes" value="yes" radioGroupValue={value} text="áno" onChange={onChange} />
        <CardRadioButton id="no" value="no" radioGroupValue={value} text="nie" onChange={onChange} />
      </QuestionnaireCard>
    </>
  );
};
