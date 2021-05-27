import { useEffect } from 'react';
import { Popover } from 'react-bootstrap';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'informovanie_o_zasadach_vykonavania_spracuvania',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p>
        Dostatočná informovanosť zamestnancov či iných osôb, ktoré sa určitým spôsobom podieľajú na vykonávaní spracúvania údajov, spočíva
        najmä v&nbsp;<b>oboznámení</b> týchto pracovníkov o&nbsp;právach a&nbsp;povinnostiach vyplývajúcich z&nbsp;interných{' '}
        <b>bezpečnostných smerníc</b> stanovujúcich zásady realizácie jednotlivých úkonov s&nbsp;osobnými údajmi v&nbsp;súlade
        s&nbsp;Nariadením GDPR.
      </p>
      <p>
        V&nbsp;súvislosti s&nbsp;patričným poučením je zaistené aj <b>vyhlásenie o&nbsp;mlčanlivosti</b> všetkými osobami oprávnenými
        spracúvať osobné údaje.
      </p>
    </Popover.Content>
  </Popover>
);

export const QInformovanieOZasadachVykonavaniaSpracuvania = ({ state, setState }) => {
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
      <QuestionnaireCard
        title="Sú osoby oprávnené pristupovať k spracúvaným údajov dostatočne a pravidelne informované o zásadách vykonávania spracúvania?"
        popover={popover}
      >
        <CardRadioButton
          id="q1"
          value="1"
          radioGroupValue={value}
          text="áno, tieto osoby sú účastné pravidelných školení"
          onChange={onChange}
        />
        <CardRadioButton id="q2" value="2" radioGroupValue={value} text="áno, tieto osoby boli poučené jednorazovo" onChange={onChange} />
        <CardRadioButton id="q3" value="3" radioGroupValue={value} text="nie" onChange={onChange} />
      </QuestionnaireCard>
    </>
  );
};
