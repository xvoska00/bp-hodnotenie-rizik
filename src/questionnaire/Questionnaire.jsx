import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import { QAutomatizovaneSystemyAUmelaInteligencia } from './QAutomatizovaneSystemyAUmelaInteligencia';
import { QDostupnostSystemu } from './QDostupnostSystemu';
import { QIdentifikaciaDotknutejOsoby } from './QIdentifikaciaDotknutejOsoby';
import { QInformovanieOZasadachVykonavaniaSpracuvania } from './QInformovanieOZasadachVykonavaniaSpracuvania';
import { QKategorieZhromazdovanychUdajov } from './QKategorieZhromazdovanychUdajov';
import { QKombinovanieOsobnychUdajov } from './QKombinovanieOsobnychUdajov';
import { QNepretrzityZber } from './QNepretrzityZber';
import { QOpatreniaPreZabezpeceniePristupu } from './QOpatreniaPreZabezpeceniePristupu';
import { QOsobneUdajeVerejnePristupne } from './QOsobneUdajeVerejnePristupne';
import { QPravaKSpracuvaniu } from './QPravaKSpracuvaniu';
import { QRozsahSpracovaniaOsobnychUdajov } from './QRozsahSpracovaniaOsobnychUdajov';
import { QSifrovaniePseudonymizacia } from './QSifrovaniePseudonymizacia';
import { QSnimanieVerejnePristupnychPriestorov } from './QSnimanieVerejnePristupnychPriestorov';
import { QSubjektUdajov } from './QSubjektUdajov';
import { QTretieStrany } from './QTretieStrany';
import { evaluate_questionnaire } from './Evaluate';
import { CustomModal } from '../Modal';
import { DPIA } from '../HodnotenieRizik';
import { Divider } from '../Divider';

const MyProgressBar = ({ risk: risc }) => {
  var progress_values = {
    success: 0,
    info: 0,
    warning: 0,
    danger: 0,
  };

  if (risc === 'negligible') {
    progress_values.success = 25;
  } else if (risc === 'small') {
    progress_values.success = 25;
    progress_values.info = 25;
  } else if (risc === 'medium') {
    progress_values.success = 25;
    progress_values.info = 25;
    progress_values.warning = 25;
  } else {
    progress_values.success = 25;
    progress_values.info = 25;
    progress_values.warning = 25;
    progress_values.danger = 25;
  }
  return (
    <ProgressBar>
      <ProgressBar animated striped variant="success" now={progress_values.success} />
      <ProgressBar animated striped variant="info" now={progress_values.info} />
      <ProgressBar animated variant="warning" now={progress_values.warning} />
      <ProgressBar animated striped variant="danger" now={progress_values.danger} />
    </ProgressBar>
  );
};

const translateRisc = (risc) => {
  if (risc === 'negligible') {
    return 'Zanedbateľné riziko';
  } else if (risc === 'small') {
    return 'Nízke riziko';
  } else if (risc === 'medium') {
    return 'Stredné riziko';
  } else if (risc === 'high') {
    return 'Vysoké riziko';
  }
};

const RiscFactorDescription = ({ risc, descriptions }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var extra = null;
  if (descriptions) {
    extra = (
      <>
        <p className="mb-0">
          {descriptions.length === 1 &&
            'Najzávažnejší aspekt posúdenej spracovateľskej činnosti, ktorý vo veľkej miere ovplyvňuje intenzitu nepriaznivého zásahu,\u00A0je:'}
          {descriptions.length > 1 &&
            'Najzávažnejšie aspekty posúdenej spracovateľskej činnosti, ktoré vo veľkej miere ovplyvňujú intenzitu nepriaznivého zásahu,\u00A0sú:'}
        </p>
        <ul>
          {descriptions.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </>
    );
  }
  const modal_launcher = (
    <a href="#hodnotenie" onClick={handleShow}>
      posúdenia vplyvu na ochranu údajov (DPIA)
    </a>
  );
  var content = null;

  if (risc === 'negligible') {
    content = (
      <p>
        V dôsledku realizácie spracúvania nehrozí subjektom údajov zásah do práv a slobôd. Riziko je považované za prijateľné.
        Spracovateľské činnosti nie je nutné podrobiť procesu {modal_launcher}.
      </p>
    );
  } else if (risc === 'small') {
    content = (
      <>
        <p>
          V dôsledku realizácie spracúvania hrozí subjektom údajov nepatrný zásah do práv a slobôd. Takéto riziko je považované za
          prijateľné. Z preventívnych dôvodov je možné podrobiť spracovateľské činnosti procesu {modal_launcher}.
        </p>
        <p>
          V prípade, že sa rozhodnete DPIA vykonať, odporúčame Vám postupovať podľa{' '}
          <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">oficiálnych metodík</a>, ktoré k
          tejto problematike vydal Úřad pro ochranu osobných údajů.
        </p>
      </>
    );
  } else if (risc === 'medium') {
    content = (
      <>
        <p>
          V dôsledku realizácie spracúvania hrozí subjektom údajov zásah do práv a slobôd spôsobom, kedy môžu pociťovať výrazné
          nepríjemnosti a následky.
        </p>
        {extra}
        <p>
          Takéto riziko je dlhodobo neprípustné. Je preto vhodné podrobiť spracovateľské činnosti procesu {modal_launcher}. Odporúčame Vám
          postupovať podľa{' '}
          <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">oficiálnych metodík</a>, ktoré
          vydal k problematike realizácie DPIA Úřad pro ochranu osobných údajů.
        </p>
      </>
    );
  } else if (risc === 'high') {
    content = (
      <>
        <p>
          V dôsledku realizácie spracúvania hrozí subjektom údajov zásah do práv a slobôd spôsobom, kedy môžu pociťovať výrazné
          nepríjemnosti a následky bez možnosti prekonať ich.
        </p>
        {extra}
        <p>
          Takéto riziko je neprípustné. Je nevyhnutné podrobiť spracovateľské činnosti procesu {modal_launcher}. Odporúčame Vám postupovať
          podľa <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">oficiálnych metodík</a>,
          ktoré vydal k problematike realizácie DPIA Úřad pro ochranu osobných údajů.
        </p>
      </>
    );
  }

  return (
    <>
      {content}
      <CustomModal show={show} handleClose={handleClose} {...DPIA} />
    </>
  );
};

const Intro = ({ questionnaireStateSet }) => {
  return (
    <>
      <p className="text-justify">
        Prechádzate do sekcie webovej stránky, ktorej súčasťou je aplikácia vytvorená za účelom zjednodušenia realizácie procesu posúdenia
        rizík. Táto aplikácia Vám umožní podrobiť Vaše spracovateľské činnosti procesu posúdenia rizík. V rámci dotazníkového formulára Vám
        bude postupne sprístupnených 15 otázok definujúcich aspekty spracúvania osobných údajov, na ktoré je potrebné pri posudzovaní rizík
        prihliadať. Pre každú otázku vyberte, prosím, tú možnosť, prípadne možnosti, ktoré budú čo najvýstižnejšie špecifikovať posudzovanú
        spracovateľskú činnosť.
      </p>
      <p className="text-justify">
        Po zodpovedaní všetkých otázok aplikácia vyhodnotí závažnosť potenciálneho rizika, ktoré môže v dôsledku vykonávania posudzovaných
        činností vzniknúť voči právam a slobodám subjektov údajov.
      </p>
      <Button
        variant="primary"
        onClick={() => {
          questionnaireStateSet((s) => ({ ...s, show_intro: false }));
        }}
      >
        Ďalej <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </>
  );
};

export const Questionnaire = () => {
  const [questionnaireState, questionnaireStateSet] = useState({
    submitted: false,
    activeCard: 0,
    cardState: {},
    show_intro: true,
  });

  if (questionnaireState.submitted) {
    var formData = {};
    for (const property in questionnaireState.cardState) {
      const v = questionnaireState.cardState[property];
      formData[v.title] = v.value;
    }
    const { severity, descriptions } = evaluate_questionnaire(formData);
    return (
      <>
        <div className="text-color-dark">
          <h2 className="title text-uppercase mb-0">Vyhodnotenie</h2>
          <Divider variant="dark" />
          <h2>Klasifikácia: {translateRisc(severity)}</h2>
        </div>
        <MyProgressBar risk={severity} />

        <div className="text-justify mt-3">
          <RiscFactorDescription risc={severity} descriptions={descriptions}></RiscFactorDescription>
        </div>
      </>
    );
  } else if (questionnaireState.show_intro) {
    return <Intro questionnaireStateSet={questionnaireStateSet}></Intro>;
  } else {
    return <QuestionnaireFormDialog state={questionnaireState} setState={questionnaireStateSet} />;
  }
};

const CARDS = [
  QKategorieZhromazdovanychUdajov,
  QIdentifikaciaDotknutejOsoby,
  QSubjektUdajov,
  QRozsahSpracovaniaOsobnychUdajov,
  QNepretrzityZber,
  QSnimanieVerejnePristupnychPriestorov,
  QOsobneUdajeVerejnePristupne,
  QAutomatizovaneSystemyAUmelaInteligencia,
  QKombinovanieOsobnychUdajov,
  QTretieStrany,
  QPravaKSpracuvaniu,
  QOpatreniaPreZabezpeceniePristupu,
  QInformovanieOZasadachVykonavaniaSpracuvania,
  QSifrovaniePseudonymizacia,
  QDostupnostSystemu,
];

const QuestionnaireFormDialog = ({ state, setState }) => {
  const CardElement = CARDS[state.activeCard];

  const isFirstCard = state.activeCard === 0;
  const isLastCard = state.activeCard === CARDS.length - 1;
  const cardState = state.cardState[state.activeCard];
  const hasCardValidValue = cardState && cardState.valid;

  const setCardState = (newCardState) => {
    setState((prevState) => {
      return {
        ...prevState,
        cardState: {
          ...prevState.cardState,
          [prevState.activeCard]: newCardState,
        },
      };
    });
  };

  const moveToNextCard = () => {
    setState((prevState) => {
      return { ...prevState, activeCard: prevState.activeCard + 1 };
    });
  };

  const moveToPreviousCard = () => {
    setState((prevState) => {
      return { ...prevState, activeCard: prevState.activeCard - 1 };
    });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setState((prevState) => {
      return { ...prevState, submitted: true };
    });
  };

  return (
    <Form className="text-left" style={{ fontSize: '93%' }} onSubmit={onSubmit}>
      <CardElement state={cardState} setState={setCardState}></CardElement>
      <div className="d-flex justify-content-between align-items-center">
        {!isFirstCard ? (
          <Button variant="secondary" onClick={moveToPreviousCard}>
            <FontAwesomeIcon icon={faChevronLeft} /> Naspäť
          </Button>
        ) : (
          <span />
        )}
        <span className="text-muted">
          {state.activeCard + 1}/{CARDS.length}
        </span>

        {isLastCard && (
          <Button type="submit" variant="primary" disabled={!hasCardValidValue}>
            Vyhodnotiť
          </Button>
        )}
        {!isLastCard && (
          <Button variant="primary" disabled={!hasCardValidValue} onClick={moveToNextCard}>
            Ďalej <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        )}
      </div>
    </Form>
  );
};
