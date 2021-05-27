import { Popover } from 'react-bootstrap';
import { useEffect } from 'react';
import { CardRadioButton, QuestionnaireCard } from './Utils';

const DEFAULT_STATE = {
  title: 'nepretrzity_zber',
  value: null,
  valid: false,
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p className="mb-0">
        Nepretržitý zber osobných údajov je charakterizovaný <b>pravidelným a&nbsp;systematickým monitorovaním</b> subjektov údajov. <br />
        <br />
        Medzi praktiky monitorovania tohto druhu možno zaradiť napr. poskytovanie telekomunikačných služieb, cielenie internetovej reklamy
        pomocou e-mailu, profilovanie a&nbsp;vytváranie bodového ohodnotenia osoby pre rôzne účely (ohodnotenie úverového zaťaženia,
        stanovenie poistného apod.), sledovanie prostredníctvom nepretržitého fungovania mobilných aplikácií atď.
      </p>
    </Popover.Content>
  </Popover>
);

export const QNepretrzityZber = ({ state, setState }) => {
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
      <QuestionnaireCard title="Je zber údajov pre následné spracúvanie realizovaný nepretržite?" popover={popover}>
        <CardRadioButton
          id="yes"
          value="yes"
          radioGroupValue={value}
          onChange={onChange}
          text="áno"
          mutedText="dlhodobé, sústavné, opakované, pravidelné a systematické monitorovanie a zber údajov"
        />
        <CardRadioButton
          id="no"
          value="no"
          radioGroupValue={value}
          onChange={onChange}
          text="nie"
          mutedText="krátkodobé, jednorazové, dočasné, príležitostné monitorovanie a zber údajov"
        />
      </QuestionnaireCard>
    </>
  );
};
