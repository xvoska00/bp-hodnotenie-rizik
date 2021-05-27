import { useEffect } from 'react';
import { Popover } from 'react-bootstrap';
import { cloneDeep } from 'lodash-es';
import { QuestionnaireCard, CardCheckboxButton } from './Utils';

const DEFAULT_STATE = {
  title: 'kategorie_zhromazdovanych_udajov',
  value: {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
  },
  valid: false,
};

const popoverQ1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      Do kategórie <i>&bdquo;zvláštnych údajov&ldquo;</i> podľa Nariadenia GDPR možno zaradiť tzv. <b>citlivé osobné údaje</b>, ktoré
      predstavujú špeciálnu kategóriu osobných údajov. <br />
      <br />
      Medzi citlivé osobné údaje radíme údaje o&nbsp;rasovom či etnickom pôvode, politických názoroch, náboženskom alebo filozofickom
      vyznaní, členstve v&nbsp;odboroch, o&nbsp;zdravotnom stave, sexuálnej orientácií a&nbsp;trestných deliktoch či právomocnom odsúdení
      osôb. Tieto údaje môžu subjekt údajov samé o&nbsp;sebe poškodiť v&nbsp;rámci spoločnosti, v&nbsp;zamestnaní, v&nbsp;škole, či môžu
      zapríčiniť až jeho diskrimináciu. Do kategórie citlivých údajov Nariadenie GDPR zahŕňa taktiež genetické a&nbsp;biometrické údaje.
    </Popover.Content>
  </Popover>
);

const popoverQ2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      Spracúvanie osobných údajov možno označiť pojmom <b>profilovanie</b> v&nbsp;prípade, ak je vykonávané <b>automatizovaným</b> spôsobom
      a&nbsp;pokiaľ je možné zhromaždené údaje následne použiť na <b>vyhodnotenie určitých osobných aspektov</b> týkajúcich sa dotknutej
      osoby. <br />
      <br />
      Medzi konkrétne príklady patrí analýza alebo predvídanie aspektov týkajúcich sa pracovného výkonu fyzickej osoby, majetkových pomerov,
      zdravia, osobných preferencií, záujmov, spoľahlivosti, správania, polohy alebo pohybu.
      <br />
      <br />
      Taktiež sem spadá aj vykonávanie spracúvania za účelom monitorovania dotknutej osoby, kedy je daná osoba sledovaná na internete,
      vrátane potenciálneho následného používania techník spracúvania údajov, ktoré pozostávajú z&nbsp;profilovania jednotlivca. A&nbsp;to
      najmä za účelom prijímania rozhodnutí týkajúcich sa dotknutej osoby alebo analýzy či predvídania jej osobných preferencií, správania
      a&nbsp;postojov.
      <br />
      <br />
      Pod pojmom{' '}
      <b>
        <i>&bdquo;automatizované&ldquo;</i>
      </b>{' '}
      spracúvanie rozumieme také činnosti, ktoré sú vykonávané spravidla s&nbsp;využitím výpočetnej techniky.
    </Popover.Content>
  </Popover>
);

export const QKategorieZhromazdovanychUdajov = ({ state, setState }) => {
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
      <QuestionnaireCard title="Kategórie zhromažďovaných údajov">
        <CardCheckboxButton
          id="q1"
          checked={value['q1']}
          popover={popoverQ1}
          setChecked={(v) => setChecked('q1', v)}
          text="sú spracúvané zvláštne kategórie údajov a údaje týkajúce sa rozsudkov trestných činov spáchaných subjektom údajov"
        />
        <CardCheckboxButton
          id="q2"
          checked={value['q2']}
          popover={popoverQ2}
          setChecked={(v) => setChecked('q2', v)}
          text="zaznamenané údaje je možné využiť pre profilovanie užívateľov alebo pre účely automatizovaného rozhodovania"
          mutedText="napr. údaje z logov, história navštívených webových stránok, údaje vypovedajúce o uskutočnení telefonických hovorov, údaje vypovedajúce o využívaní komunikácie prostredníctvom elektronickej pošty, finančné údaje (o stave majetku, výška disponibilných finančných prostriedkov, údaje o pôžičkách a finančných dlhoch apod.)"
        />
        <CardCheckboxButton
          id="q3"
          checked={value['q3']}
          setChecked={(v) => setChecked('q3', v)}
          text="sú spracúvané údaje, ktoré umožňujú, v prípade ich zneužitia, vystupovať v mene subjektu údajov"
          mutedText="napr. prístupové meno, heslo/PIN, pseudonym"
        />
        <CardCheckboxButton
          id="q4"
          checked={value['q4']}
          setChecked={(v) => setChecked('q4', v)}
          text="sú spracúvané údaje umožňujúce jednoznačnú identifikáciu subjektu údajov"
          mutedText="do tejto skupiny osobných údajov radíme jednoznačné identifikátory ako napr. rodné číslo, číslo občianskeho preukazu, číslo vodičského preukazu, číslo cestovného dokladu (pas), číslo sociálneho poistenia, číslo zdravotného poistenia"
        />
        <CardCheckboxButton
          id="q5"
          checked={value['q5']}
          setChecked={(v) => setChecked('q5', v)}
          text="sú spracúvané údaje umožňujúce prístup a manipuláciu k finančným prostriedkom subjektu údajov"
          mutedText="spracovanie zahŕňa údaje ako napr. meno aj priezvisko, titul, dátum narodenia, adresa pobytu, číslo platobnej karty, heslo/PIN, telefónne číslo, e-mailová adresa, informácie o vlastníctvach subjektu údajov"
        />
        <CardCheckboxButton
          id="q6"
          checked={value['q6']}
          setChecked={(v) => setChecked('q6', v)}
          text="ostatné osobné údaje"
          mutedText="do tejto skupiny radíme údaje, ktoré samé o sebe neumožnia jednoznačnú identifikáciu – softbiometrické údaje (váha, výška, vek, pohlavie, farba vlasov, farba očí, typ postavy apod.), bežné obrazové záznamy, ktoré vznikli z dôvodu oprávneného monitorovania určitej oblasti napr. pre zaistenie bezpečnosti apod."
        />
      </QuestionnaireCard>
    </>
  );
};
