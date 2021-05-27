import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'prava_k_spracuvaniu',
  value: null,
  valid: false,
};

export const QPravaKSpracuvaniu = ({ state, setState }) => {
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
      <QuestionnaireCard title="Môže si subjekt údajov uplatniť práva k prebiehajúcemu spracúvaniu?">
        <CardRadioButton
          id="Q1"
          value="1"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov má právo ovplyvniť spracúvanie údajov a ich prípadné poskytovanie"
          mutedText="tie spracovania, kedy si subjekt môže bez problémov presadiť všetky práva vyplývajúce z Nariadenia GDPR"
        />
        <CardRadioButton
          id="Q2"
          value="2"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov má obmedzené právo ovplyvniť spracúvanie údajov a ich prípadné poskytovanie"
          mutedText="tie spracovania, kedy si subjekt môže presadiť práva vyplývajúce z Nariadenia GDPR napr. v obmedzenom časovom úseku alebo za vymedzených podmienok; jedná sa najmä o činnosti spracúvania takých údajov, ktoré sú potrebné k uplatneniu práv vyplývajúcich zo zákona, napr. pri uzatváraní licenčných zmlúv"
        />
        <CardRadioButton
          id="Q3"
          value="3"
          radioGroupValue={value}
          onChange={onChange}
          text="subjekt údajov nemá právo ovplyvniť spracúvanie údajov a ich prípadné poskytovanie"
          mutedText="tie spracovania, kedy si subjekt môže len obmedzene alebo vôbec nemôže presadiť svoje práva vyplývajúce z Nariadenia GDPR; jedná sa najmä o činnosti spracúvania založené na plnení zákonnej povinnosti prevádzkovateľa"
        />
      </QuestionnaireCard>
    </>
  );
};
