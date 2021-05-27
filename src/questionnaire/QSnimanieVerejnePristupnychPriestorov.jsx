import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'snimanie_verejne_pristupnych_priestorov',
  value: null,
  valid: false,
};

export const QSnimanieVerejnePristupnychPriestorov = ({ state, setState }) => {
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
      <QuestionnaireCard title="Zahŕňa realizované spracúvanie aj snímanie verejne prístupných priestorov?">
        <CardRadioButton
          id="Q1"
          value="1"
          radioGroupValue={value}
          onChange={onChange}
          text="je uskutočňované snímanie verejne prístupných miest "
          mutedText="snímanie miest so zvýšenou koncentráciou obyvateľstva ako napr. verejných priestranstiev, pasáží, letísk apod. prostredníctvom kamerových systémov monitorujúcich tieto verejné priestranstvá vo veľkom rozsahu "
        />
        <CardRadioButton
          id="Q2"
          value="2"
          radioGroupValue={value}
          onChange={onChange}
          text="je uskutočňované snímanie miest verejne obmedzene prístupných"
          mutedText="snímanie s nevýraznou koncentráciou obyvateľstva ako napr. interiérov verejných budov, bytových objektov, súkromných pozemkov majiteľa apod. prostredníctvom kamerových systémov"
        />
        <CardRadioButton
          id="Q3"
          value="3"
          radioGroupValue={value}
          onChange={onChange}
          text="snímanie verejne prístupných priestorov nie je realizované"
        />
      </QuestionnaireCard>
    </>
  );
};
