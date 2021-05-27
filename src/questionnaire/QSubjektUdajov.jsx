import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'subjekt_udajov',
  value: null,
  valid: false,
};

export const QSubjektUdajov = ({ state, setState }) => {
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
      <QuestionnaireCard title="Subjekt údajov">
        <CardRadioButton
          id="Q1"
          value="1"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov spadá do kategórie stále zraniteľných subjektov"
          mutedText="do tejto kategórie radíme osoby, ktoré sa v rámci celej spoločnosti dostávajú, na základe istých špecifických prvkov, do znevýhodnenej pozície – vymedzené skupiny obyvateľstva podľa národnosti, náboženstva, sexuálnej orientácie, telesného a mentálneho hendikepu, odsúdenia za spáchanie trestného činu apod."
        />
        <CardRadioButton
          id="Q2"
          value="2"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov z istého dôvodu počas určitej fázy svojho života spadá do skupiny zraniteľných subjektov"
          mutedText="do tejto kategórie radíme osoby, ktoré nemožno považovať za osoby stále znevýhodnené, avšak počas určitého obdobia svojho života nadobúdajú isté faktory, ktoré ich stavajú do znevýhodnenej pozície voči celej spoločnosti – migranti, osoby liečiace sa zo závažného ochorenia, staršie osoby (v dôchodkovom veku), deti a mladiství"
        />
        <CardRadioButton
          id="Q3"
          value="3"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov nedisponuje vlastnosťami, na základe ktorých ho možno zaradiť medzi zraniteľné subjekty"
        />
      </QuestionnaireCard>
    </>
  );
};
