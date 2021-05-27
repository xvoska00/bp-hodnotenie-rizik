import { Popover } from 'react-bootstrap';
import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'rozsah_spracovania_osobnych_udajov',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p className="mb-0">
        Pri rozhodovaní o <b>rozsahu spracúvania</b> je potrebné zvážiť nasledovné faktory: <br />
      </p>
      <ul>
        <li>počet dotknutých osôb, ktorých osobné údaje sú zaznamenávané,</li>
        <li>objem a/alebo rozsah údajov (tj. počet rôznych kategórií údajov), ktoré sa spracúvajú,</li>
        <li>dĺžka trvania spracúvania,</li>
        <li>geografický rozsah činností spracúvania.</li>
      </ul>
    </Popover.Content>
  </Popover>
);

export const QRozsahSpracovaniaOsobnychUdajov = ({ state, setState }) => {
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
      <QuestionnaireCard title="Rozsah spracovania osobných údajov" popover={popover}>
        <CardRadioButton
          id="Q1"
          value="velky"
          radioGroupValue={value}
          onChange={onChange}
          text="veľký rozsah spracovania"
          mutedText="viac než 10 tisíc subjektov údajov a/alebo viac než 20 osôb oprávnených pristupovať k spracúvaným údajom a/alebo viac než 20 miest, na ktorých je realizovanie spracúvané a zároveň úroveň štátu z hľadiska umiestnenia subjektov údajov"
        />
        <CardRadioButton
          id="Q2"
          value="stredny"
          radioGroupValue={value}
          onChange={onChange}
          text="stredný rozsah spracovania"
          mutedText="viac než 5 tisíc subjektov údajov a/alebo viac než 2 osoby oprávnené pristupovať k spracúvaným údajom a/alebo viac než 5 miest, na ktorých je realizovanie spracúvané a zároveň úroveň regiónu/kraja z hľadiska umiestnenia subjektov údajov"
        />
        <CardRadioButton
          id="Q3"
          value="maly"
          radioGroupValue={value}
          onChange={onChange}
          text="malý rozsah spracovania"
          mutedText="najviac 5 tisíc subjektov údajov a/alebo najviac 2 osoby oprávnené pristupovať k spracúvaným údajom a/alebo najviac 4 miesta, na ktorých je realizovanie spracúvané a zároveň úroveň najmenej obce z hľadiska umiestnenia subjektov údajov"
        />
      </QuestionnaireCard>
    </>
  );
};
