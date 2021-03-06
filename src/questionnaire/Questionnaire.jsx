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
    return 'Zanedbate??n?? riziko';
  } else if (risc === 'small') {
    return 'N??zke riziko';
  } else if (risc === 'medium') {
    return 'Stredn?? riziko';
  } else if (risc === 'high') {
    return 'Vysok?? riziko';
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
            'Najz??va??nej???? aspekt pos??denej spracovate??skej ??innosti, ktor?? vo ve??kej miere ovplyv??uje intenzitu nepriazniv??ho z??sahu,\u00A0je:'}
          {descriptions.length > 1 &&
            'Najz??va??nej??ie aspekty pos??denej spracovate??skej ??innosti, ktor?? vo ve??kej miere ovplyv??uj?? intenzitu nepriazniv??ho z??sahu,\u00A0s??:'}
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
      pos??denia vplyvu na ochranu ??dajov (DPIA)
    </a>
  );
  var content = null;

  if (risc === 'negligible') {
    content = (
      <p>
        V d??sledku realiz??cie sprac??vania nehroz?? subjektom ??dajov z??sah do pr??v a??slob??d. Riziko je pova??ovan?? za prijate??n??.
        Spracovate??sk?? ??innosti nie je nutn?? podrobi?? procesu {modal_launcher}.
      </p>
    );
  } else if (risc === 'small') {
    content = (
      <>
        <p>
          V d??sledku realiz??cie sprac??vania hroz?? subjektom ??dajov nepatrn?? z??sah do pr??v a??slob??d. Tak??to riziko je pova??ovan?? za
          prijate??n??. Z??prevent??vnych d??vodov je mo??n?? podrobi?? spracovate??sk?? ??innosti procesu {modal_launcher}.
        </p>
        <p>
          V??pr??pade, ??e sa rozhodnete DPIA vykona??, odpor????ame V??m postupova?? pod??a{' '}
          <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">ofici??lnych metod??k</a>, ktor?? k
          tejto??problematike vydal ????ad pro ochranu osobn??ch ??daj??.
        </p>
      </>
    );
  } else if (risc === 'medium') {
    content = (
      <>
        <p>
          V d??sledku realiz??cie sprac??vania hroz?? subjektom ??dajov z??sah do pr??v a??slob??d sp??sobom, kedy m????u poci??ova?? v??razn??
          nepr??jemnosti a??n??sledky.
        </p>
        {extra}
        <p>
          Tak??to riziko je dlhodobo nepr??pustn??. Je preto vhodn?? podrobi?? spracovate??sk?? ??innosti procesu {modal_launcher}. Odpor????ame V??m
          postupova?? pod??a{' '}
          <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">ofici??lnych metod??k</a>, ktor??
          vydal k??problematike realiz??cie DPIA ????ad pro ochranu osobn??ch ??daj??.
        </p>
      </>
    );
  } else if (risc === 'high') {
    content = (
      <>
        <p>
          V d??sledku realiz??cie sprac??vania hroz?? subjektom ??dajov z??sah do pr??v a??slob??d sp??sobom, kedy m????u poci??ova?? v??razn??
          nepr??jemnosti a??n??sledky bez mo??nosti prekona?? ich.
        </p>
        {extra}
        <p>
          Tak??to riziko je nepr??pustn??. Je nevyhnutn?? podrobi?? spracovate??sk?? ??innosti procesu {modal_launcher}. Odpor????ame V??m postupova??
          pod??a <a href="https://www.uoou.cz/metodika-obecneho-posouzeni-vlivu-na-ochranu-osobnich-udaju/d-46497">ofici??lnych metod??k</a>,
          ktor?? vydal k??problematike realiz??cie DPIA ????ad pro ochranu osobn??ch ??daj??.
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
        Prech??dzate do sekcie webovej str??nky, ktorej s????as??ou je aplik??cia vytvoren?? za ????elom zjednodu??enia realiz??cie procesu pos??denia
        riz??k. T??to aplik??cia V??m umo??n?? podrobi?? Va??e spracovate??sk?? ??innosti procesu pos??denia riz??k. V r??mci dotazn??kov??ho formul??ra V??m
        bude postupne spr??stupnen??ch 15 ot??zok definuj??cich aspekty sprac??vania osobn??ch ??dajov, na ktor?? je potrebn?? pri posudzovan?? riz??k
        prihliada??. Pre ka??d?? ot??zku vyberte, pros??m, t?? mo??nos??, pr??padne mo??nosti, ktor?? bud?? ??o najv??sti??nej??ie ??pecifikova?? posudzovan??
        spracovate??sk?? ??innos??.
      </p>
      <p className="text-justify">
        Po zodpovedan?? v??etk??ch ot??zok aplik??cia vyhodnot?? z??va??nos?? potenci??lneho rizika, ktor?? m????e v d??sledku vykon??vania posudzovan??ch
        ??innost?? vznikn???? vo??i pr??vam a slobod??m subjektov ??dajov.
      </p>
      <Button
        variant="primary"
        onClick={() => {
          questionnaireStateSet((s) => ({ ...s, show_intro: false }));
        }}
      >
        ??alej <FontAwesomeIcon icon={faChevronRight} />
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
          <h2>Klasifik??cia: {translateRisc(severity)}</h2>
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
            <FontAwesomeIcon icon={faChevronLeft} /> Nasp????
          </Button>
        ) : (
          <span />
        )}
        <span className="text-muted">
          {state.activeCard + 1}/{CARDS.length}
        </span>

        {isLastCard && (
          <Button type="submit" variant="primary" disabled={!hasCardValidValue}>
            Vyhodnoti??
          </Button>
        )}
        {!isLastCard && (
          <Button variant="primary" disabled={!hasCardValidValue} onClick={moveToNextCard}>
            ??alej <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        )}
      </div>
    </Form>
  );
};
