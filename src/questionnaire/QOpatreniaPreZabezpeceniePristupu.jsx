import { useEffect } from 'react';
import { Popover } from 'react-bootstrap';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'opatrenia_pre_zabezpecenie_pristupu',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p>
        Otázka <b>fyzického zabezpečenia</b> osobných údajov sa týka zabezpečenia prístupu do objektov, z&nbsp;ktorých je možné realizovať
        prístup k&nbsp;zariadeniam, ktoré slúžia ako úložisko týchto údajov, či priamo k&nbsp;samotným zaznamenaným údajom.
        <br />
        <br />
        <b>Zabezpečenie administratívneho prístupu</b> spočíva v&nbsp;zabezpečení prístupu do databáz či úložísk, v&nbsp;ktorých sú osobné
        údaje uchovávané, tj. používanie prístupového hesla spĺňajúceho požiadavky pre dostatočne silné heslo, znalosť prístupového hesla
        len pre osoby oprávnené pristupovať k&nbsp;údajom, rozlíšenie privilégií oprávnených osôb v&nbsp;rámci manipulácie
        s&nbsp;uchovávanými údajmi apod.
      </p>
    </Popover.Content>
  </Popover>
);

export const QOpatreniaPreZabezpeceniePristupu = ({ state, setState }) => {
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
        title="Sú implementované adekvátne opatrenia pre zabezpečenie fyzického a administratívneho prístupu k spracúvaným údajom?"
        popover={popover}
      >
        <CardRadioButton id="yes" value="yes" radioGroupValue={value} text="áno" onChange={onChange} />
        <CardRadioButton id="no" value="no" radioGroupValue={value} text="nie" onChange={onChange} />
      </QuestionnaireCard>
    </>
  );
};
