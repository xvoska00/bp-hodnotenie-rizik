import { useEffect } from 'react';
import { cloneDeep } from 'lodash-es';
import { QuestionnaireCard, CardCheckboxButton } from './Utils';

const DEFAULT_STATE = {
  title: 'identifikacia_dotknutej_osoby',
  value: {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  },
};

export const QIdentifikaciaDotknutejOsoby = ({ state, setState }) => {
  useEffect(() => {
    if (state === undefined) {
      setState(cloneDeep(DEFAULT_STATE));
    }
  });
  const value = state && state.value;

  const setChecked = (what, value) => {
    var newState = { ...state };
    newState.value[what] = value;
    newState.valid = Object.values(newState.value).some((v) => v);
    setState(newState);
  };

  if (value === undefined) {
    return '';
  }

  return (
    <>
      <QuestionnaireCard title="Identifikácia dotknutej osoby">
        <CardCheckboxButton
          id="q1"
          checked={value['q1']}
          setChecked={(v) => setChecked('q1', v)}
          text="na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať a lokalizovať"
          mutedText="jedná sa najmä o spracovanie údajov monitorujúcich fyzický pohyb alebo pobyt identifikovateľných subjektov údajov, a to najmä s využitím ich súradníc"
        />
        <CardCheckboxButton
          id="q2"
          checked={value['q2']}
          setChecked={(v) => setChecked('q2', v)}
          text="na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať a rozpoznať"
          mutedText="jedná sa najmä o spracovanie obrazových záznamov identifikovateľných subjektov údajov za účelom ochrany majetku a zvýšenie bezpečnosti osôb, tj. bežný kamerový systém"
        />
        <CardCheckboxButton
          id="q3"
          checked={value['q3']}
          setChecked={(v) => setChecked('q3', v)}
          text="na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať"
        />
        <CardCheckboxButton
          id="q4"
          checked={value['q4']}
          setChecked={(v) => setChecked('q4', v)}
          text="na základe zaznamenaných údajov nie je možné subjekt jednoznačne identifikovať"
        />
      </QuestionnaireCard>
    </>
  );
};
