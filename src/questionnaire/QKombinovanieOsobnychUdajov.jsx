import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'kombinovanie_osobnych_udajov',
  value: null,
  valid: true,
};

export const QKombinovanieOsobnychUdajov = ({ state, setState }) => {
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
      <QuestionnaireCard title="Dochádza ku kombinovaniu zaznamenaných údajov s údajmi, ktoré boli získané za iným účelom?">
        <CardRadioButton id="yes" value="yes" radioGroupValue={value} text="áno" onChange={onChange} />
        <CardRadioButton id="no" value="no" radioGroupValue={value} text="nie" onChange={onChange} />
      </QuestionnaireCard>
    </>
  );
};
