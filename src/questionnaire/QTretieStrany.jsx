import { useEffect } from 'react';
import { cloneDeep } from 'lodash-es';
import { CardCheckboxButton, CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'tretie_strany',
  value: {
    main: null,
    sub: {
      mimo_eu: null,
      ucel: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
      },
    },
  },
  valid: false,
};

export const QTretieStrany = ({ state, setState }) => {
  useEffect(() => {
    if (state === undefined) {
      setState(cloneDeep(DEFAULT_STATE));
    }
  });

  const is_valid = (state) => {
    if (state.value.main === 'no') return true;
    if (state.value.main === 'yes') {
      if (state.value.sub.mimo_eu === null) {
        return false;
      }
      return Object.values(state.value.sub.ucel).some((v) => v);
    }
    return false;
  };

  const onChangeMain = (ev) => {
    var newState = { ...state };
    newState.value.main = ev.target.value;
    newState.valid = is_valid(newState);
    setState(newState);
  };

  const onChangeEU = (ev) => {
    var newState = { ...state };
    newState.value.sub.mimo_eu = ev.target.value;
    newState.valid = is_valid(newState);
    setState(newState);
  };

  const setExtraCheckbox = (what, value) => {
    var newState = { ...state };
    newState.value.sub.ucel[what] = value;
    newState.valid = is_valid(newState);
    setState(newState);
  };

  if (state === undefined) return '';
  const value = state.value;
  const extra_checkbox = value.sub.ucel;

  return (
    <>
      <QuestionnaireCard title="Existujú tretie strany, ktorým sú zaznamenané údaje poskytované?">
        <CardRadioButton id="yes" value="yes" radioGroupValue={value.main} text="áno" onChange={onChangeMain} />
        <CardRadioButton id="no" value="no" radioGroupValue={value.main} text="nie" onChange={onChangeMain} />
      </QuestionnaireCard>
      {value.main === 'yes' && (
        <QuestionnaireCard title="Sú osobné údaje predávané v rámci územia EÚ?">
          <CardRadioButton
            id="eu_1"
            value="1"
            radioGroupValue={value.sub.mimo_eu}
            onChange={onChangeEU}
            text="osobné údaje sú predávané do štátov s nezaistenou úrovňou ochrany mimo EÚ"
            mutedText="súčinnosť s daným typom tretej strany je vykonávaná na základe článku 49 Nariadenia GDPR"
          />
          <CardRadioButton
            id="eu_2"
            value="2"
            radioGroupValue={value.sub.mimo_eu}
            onChange={onChangeEU}
            text="osobné údaje sú predávané do štátov so zaistenou úrovňou ochrany mimo EÚ"
            mutedText="súčinnosť s daným typom tretej strany je vykonávaná na základe článku 46 Nariadenia GDPR"
          />
          <CardRadioButton
            id="eu_3"
            value="3"
            radioGroupValue={value.sub.mimo_eu}
            onChange={onChangeEU}
            text="osobné údaje sú predávané do štátov so zaistenou úrovňou ochrany v rámci EÚ"
          />
        </QuestionnaireCard>
      )}
      {value.main === 'yes' && (
        <QuestionnaireCard title="Za akým účelom sú osobné údaje poskytované tretím stranám?">
          <CardCheckboxButton
            id="q1"
            checked={extra_checkbox['q1']}
            setChecked={(v) => setExtraCheckbox('q1', v)}
            text="osobné údaje sú predávané sprostredkovateľovi spracúvania, ktorý vykonáva spracúvanie týchto údajov na základe poverenia od prevádzkovateľa"
          />
          <CardCheckboxButton
            id="q2"
            checked={extra_checkbox['q2']}
            setChecked={(v) => setExtraCheckbox('q2', v)}
            text="osobné údaje sú predávané medzi spoločnými prevádzkovateľmi realizujúcimi spracúvanie pre plnenie spoločného účelu"
          />
          <CardCheckboxButton
            id="q3"
            checked={extra_checkbox['q3']}
            setChecked={(v) => setExtraCheckbox('q3', v)}
            text="osobné údaje sú predávané za účelom zabezpečenia nevyhnutnej zdravotnej starostlivosti poskytnutej subjektu údajov"
          />
          <CardCheckboxButton
            id="q4"
            checked={extra_checkbox['q4']}
            setChecked={(v) => setExtraCheckbox('q4', v)}
            text="osobné údaje sú predávané za účelom plnenia zmluvy, ktorej zmluvnou stranou je subjekt údajov"
          />
          <CardCheckboxButton
            id="q5"
            checked={extra_checkbox['q5']}
            setChecked={(v) => setExtraCheckbox('q5', v)}
            text="osobné údaje sú predávané za účelom vytárania bodového ohodnotenia subjektu údajov"
          />
          <CardCheckboxButton
            id="q6"
            checked={extra_checkbox['q6']}
            setChecked={(v) => setExtraCheckbox('q6', v)}
            text="osobné údaje sú predávané k marketingovým účelom"
          />
        </QuestionnaireCard>
      )}
    </>
  );
};
