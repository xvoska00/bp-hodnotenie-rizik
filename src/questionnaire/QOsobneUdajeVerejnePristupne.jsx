import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'osobne_udaje_verejne_pristupne',
  value: null,
  valid: false,
};

export const QOsobneUdajeVerejnePristupne = ({ state, setState }) => {
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
      <QuestionnaireCard title="Sú spracúvané osobné údaje verejne prístupné?">
        <CardRadioButton
          id="Q1"
          value="1"
          radioGroupValue={value}
          onChange={onChange}
          text="zaznamenané údaje sú verejne prístupné neobmedzenému počtu subjektov"
          mutedText="údaje sú v rámci spracúvania sprístupňované verejnosti napr. na základe právnych predpisov"
        />
        <CardRadioButton
          id="Q2"
          value="2"
          radioGroupValue={value}
          onChange={onChange}
          text="zaznamenané údaje sú verejne prístupné obmedzenému počtu subjektov"
          mutedText="údaje sú v rámci spracúvania sprístupňované obmedzenej skupine iných subjektov, ktorú musí prevádzkovateľ vopred presne a jednoznačne vymedziť"
        />
        <CardRadioButton
          id="Q3"
          value="3"
          radioGroupValue={value}
          onChange={onChange}
          text="zaznamenané údaje nie sú verejne prístupné"
          mutedText="údaje sú v rámci spracúvania sprístupňované len prevádzkovateľovi a/alebo sprostredkovateľovi spracúvania, prípadne orgánom verejnej moci na základe právnych predpisov"
        />
      </QuestionnaireCard>
    </>
  );
};
