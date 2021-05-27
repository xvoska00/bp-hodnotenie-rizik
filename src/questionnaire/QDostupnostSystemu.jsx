import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'dostupnost_systemu',
  value: null,
  valid: false,
};

export const QDostupnostSystemu = ({ state, setState }) => {
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
      <QuestionnaireCard title="Je zaistená neustála dostupnosť systému a služieb spracúvania?">
        <CardRadioButton
          id="Q1"
          value="1"
          radioGroupValue={value}
          onChange={onChange}
          text="áno, pravdepodobnosť výpadku systému a služieb spracúvania je zanedbateľná"
        />
        <CardRadioButton
          id="Q2"
          value="2"
          radioGroupValue={value}
          onChange={onChange}
          text="áno, v prípade výpadku systému a/alebo služieb spracúvania je možné obnoviť dostupnosť osobných údajov a prístup k nim včas"
          mutedText="v prípade výpadku systému a služieb spracúvania je možné na nevyhnutný čas, potrebný pre zabezpečenie prístupu k údajom počas doby trvania výpadku, využiť aj záložné kópie uchovávaných údajov, ak sú vedené"
        />
        <CardRadioButton
          id="Q3"
          value="3"
          radioGroupValue={value}
          onChange={onChange}
          text="nie je možné garantovať neustálu dostupnosť systému a služieb spracúvania, ale zároveň je dočasná nedostupnosť údajov prijateľná"
          mutedText="tie spracovania, kedy by nedostupnosť osobných údajov nespôsobila kritické obtiaže pre subjekty údajov"
        />
        <CardRadioButton
          id="Q4"
          value="4"
          radioGroupValue={value}
          onChange={onChange}
          text="nie je možné garantovať neustálu dostupnosť systému a služieb spracúvania a zároveň je dočasná nedostupnosť údajov neprijateľná"
          mutedText="tie spracovania, kedy by nedostupnosť osobných údajov mohla mať za následok vznik kritickej situácie pre subjekt údajov, napr. nedostupnosť zdravotnej dokumentácie pacienta pri nasadzovaní liečby"
        />
      </QuestionnaireCard>
    </>
  );
};
