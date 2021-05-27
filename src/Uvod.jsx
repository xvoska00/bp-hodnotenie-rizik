import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Section, SectionHeading } from './PageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { CustomModal } from './Modal';
import shield from './assets/img/shield.png';
import user from './assets/img/user.png';
import file from './assets/img/file.png';
import './Divider.css';
import './Uvod.css';

const plus = <FontAwesomeIcon icon={faPlus} size="3x" />;

const MODAL_CONTENT = {
  1: {
    title: 'Je ochrana údajov dôležitá?',
    text: (
      <p>
        Osobné údaje sú všetky informácie, ktoré osoba po sebe zanecháva pri plnení svojich každodenných, bežných aktivít. Možno to znie
        prekvapujúco, ale nejedná sa o&nbsp;len údaje ako napríklad meno, priezvisko, rodné číslo či adresa bydliska. Pojem{' '}
        <b>&bdquo;osobné údaje&ldquo;</b> zahŕňa nespočetné množstvo rôznych informácií o&nbsp;nás ako osobách. Možno medzi ne zaradiť
        taktiež informácie o&nbsp;tom, kde sa pohybujeme, informácie zverejnené na našich sociálnych sieťach, naše vyjadrenia na webových
        stránkach, fotografie, videá a&nbsp;mnohé iné.
        <br />
        <br />
        Osobnými údajmi o&nbsp;osobách disponuje štát, zdravotnícke zariadenia, zamestnávatelia, školy a&nbsp;celá rada ďalších
        poskytovateľov rozličných služieb (napr. e-shopy, banky, mobilní operátori).
        <br />
        <br />V praxi to znamená, že veľké množstvo rozličných spoločností, firiem, disponuje veľkým množstvom údajov o&nbsp;mnohých
        osobách. Je teda zrejmé, že osobné údaje, nakoľko ide o&nbsp;informácie odzrkadľujúce jedinečnosť danej osoby, je nutné pri
        manipulácii s&nbsp;nimi patrične chrániť, aby nedošlo k&nbsp;poškodeniu záujmov, práv a&nbsp;slobôd prílušnej osoby, ktorej sa dané
        informácie týkajú.
      </p>
    ),
  },
  2: {
    title: 'Čo je to GDPR?',
    text: (
      <p>
        GDPR (z angl. <i>General Data Protection Regulation</i>), celým názvom{' '}
        <b>
          Nariadenie Európskeho parlamentu a&nbsp;Rady (EÚ) 2016/679 z&nbsp;27.&thinsp;apríla 2016 o&nbsp;ochrane fyzických osôb pri
          spracúvaní osobných údajov a&nbsp;o&nbsp;voľnom pohybe takýchto údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné nariadenie
          o&nbsp;ochrane údajov)
        </b>{' '}
        je pomerne nová legislatívna úprava v&nbsp;oblasti ochrany osobných údajov. Primárnym cieľom Nariadenia GDPR je posilniť spôsoby
        ochrany osobných údajov, a&nbsp;tým chrániť aj osoby, ktorých sa dané údaje týkajú. Nariadenie GDPR zavádza pre prevádzkovateľov
        spracúvania osobných údajov mnohé povinnosti, zaväzuje ich k&nbsp;dodržiavaniu niekoľkých zásad a&nbsp;naopak dotknutým osobám
        poskytuje väčšie možnosti k&nbsp;zaisteniu ochrany ich základných práv a&nbsp;slobôd. <br />
        <br />
        Celé znenie Nariadenia GDPR je dostupné na{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">týchto stránkach</a>
        . <br />
        <br />O konkrétnejších podrobnostiach v&nbsp;súvislosti s&nbsp;problematikou týkajúcou sa Nariadenia GDPR, jeho náplne
        a&nbsp;zamýšľaných cieľov, bude pojednávané v&nbsp;nasledujúcich sekciách.
      </p>
    ),
  },
  3: {
    title: 'Na koho dopadajú povinnosti vyplývajúce z\xa0GDPR?',
    text: (
      <p>
        Povinnosť zabezpečiť a dodržiavať patričnú ochranu osobných údajov dopadá na každú osobu, ktorá <b>spracúva osobné údaje</b> &ndash;
        čiže akýmkoľvek spôsobom manipuluje s&nbsp;osobnými údajmi iných osôb. Touto osobou je prevádzkovateľ spracúvania osobných údajov,
        prípadne sprostredkovateľ spracúvania.
        <br />
        <br />
        <b>Prevádzkovateľ</b> je osoba, ktorá <b>určí účel a&nbsp;prostriedky spracúvania</b> osobných údajov &ndash; definuje teda,{' '}
        <b>prečo a&nbsp;akým spôsobom má byť zaobchádzané </b>
        s&nbsp;osobnými údajmi. Prevádzkovateľom môže byť prakticky akákoľvek osoba, firma či iná organizácia, ktorá akýmkoľvek spôsobom
        nakladá s&nbsp;určitou informáciou o&nbsp;inej osobe. Prevádzkovateľ je viazaný mnohými pravidlami vyplývajúcimi z&nbsp;Nariadenia
        GDPR a <b>nesie zodpovednosť</b> za ich dodržiavanie.
        <br />
        <br />V súčinnosti s&nbsp;prevádzkovateľom sa na spracúvaní môže podieľať aj tzv.&nbsp;<b>sprostredkovateľ</b> spracúvania. Ide
        o&nbsp;osobu, ktorá realizuje spracúvanie (alebo jeho určitú časť) na základe poverenia od prevádzkovateľa. Sprostredkovateľ síce
        nepreberá zodpovednosť za zákonnosť spracúvania, tá&nbsp;stále dopadá na prevádzkovateľa, ale je rovnako ako i&nbsp;prevádzkovateľ
        povinný podniknúť pri plnení svojich činností také kroky, aby bolo spracúvanie vykonávané v&nbsp;súlade s&nbsp;legislatívou GDPR.
      </p>
    ),
  },
};

const UvodInfoColl = ({ title, text, icon_src, modal_content }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col md={4}>
        <div className="uvod-item mx-auto" onClick={handleShow}>
          <div className="uvod-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="uvod-item-caption-content text-center text-white">{plus}</div>
          </div>
          <img className="img-fluid" src={icon_src} alt="" />
        </div>
        <h4 className="service-heading">
          <br />
          {title}
        </h4>
        <p className="text-muted font-italic">{text}</p>
      </Col>
      <CustomModal show={show} handleClose={handleClose} title={modal_content.title} body={modal_content.text} />
    </>
  );
};

export const Uvod = () => {
  return (
    <Section className="uvod text-color-dark" id="uvod">
      <Container>
        <SectionHeading text="Úvod" dividerStyle="dark" />
        <Row className="text-center">
          <UvodInfoColl
            title="Prečo je potrebné osobné údaje chrániť?"
            text="Čo všetko možno zaradiť medzi osobné údaje?"
            icon_src={shield}
            modal_content={MODAL_CONTENT[1]}
          />
          <UvodInfoColl
            title="Na základe čoho sú osobné údaje chránené?"
            text="Čo si predstaviť pod pojmom GDPR?"
            icon_src={file}
            modal_content={MODAL_CONTENT[2]}
          />
          <UvodInfoColl
            title="Koho sa táto problematika týka?"
            text="Kto je to prevádzkovateľ spracúvania?"
            icon_src={user}
            modal_content={MODAL_CONTENT[3]}
          />
        </Row>
      </Container>
    </Section>
  );
};
