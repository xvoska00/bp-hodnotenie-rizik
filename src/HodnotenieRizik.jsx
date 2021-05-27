import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CustomModal } from './Modal';
import { Section, SectionHeading } from './PageSection';
import { Questionnaire } from './questionnaire/Questionnaire';

const lightbulb = <FontAwesomeIcon icon={faLightbulb} />;

const CONTENT = {
  HodnotenieRizik: {
    title: 'Hodnotenie rizík',
    body: (
      <p>
        Pod pojmom{' '}
        <i>
          <b>&bdquo;riziko&ldquo;</b>
        </i>{' '}
        si možno predstaviť akúkoľkvek neočakávanú situáciu, ktorá nepriaznivo ovyplyvní plánovaný priebeh vykonávnaých činností
        a&nbsp;prináša do jej realizácie neočakávaný výsledok. <b>Hodnotenie rizík</b> predstavuje proces systematického vyhľadávania,
        posudzovania, hodnotenia a&nbsp;odstraňovania neistôt, vďaka ktorému je možné predchádzať neočakávaným, neistým situáciám.
        Hodnotenie rizík teda umožňuje <b>predchádzať vzniku rizika</b> v&nbsp;rámci vykonávanej činnosti.
        <br />
        <br />
        V kontexte spracúvania osobných údajov by nepriaznivá udalosť, čiže riziko, spôsobila uvedenie vykonávaného spracúvania údajov do
        nesúladu s&nbsp;Nariadením GDPR, čo by malo za následok pravdepodobný zásah do práv a&nbsp;slobôd subjektov údajov, o&nbsp;ktorých
        sú informácie zaznamenávané. Cieľom hodnotenie rizík pri vykonávaní spracovateľských činností je včas odhaliť možné riziká, aby
        mohli byť následne prijaté také opatrenia, ktoré by zamedzili nepriaznivému zásahu do práv a&nbsp;slobôd subjektov údajov.
        <br />
        <br />
        V&nbsp;niektorých druhoch literatúry sa môžete stretnúť aj s pojmom <b>&bdquo;posudzovanie rizík&ldquo;</b>, ktorý popisuje rovnakú
        problematiku trojúrovňového postupu monitorovania a následného ohodnotenia rizík.
      </p>
    ),
  },
  DPIA: {
    title: 'Posúdenie vplyvu na ochranu údajov',
    body: (
      <p>
        Nariadenie GDPR vo svojom článku 35 zavádza povinnosť vykonávania tzv. <b>posúdenie vplyvu na ochranu údajov</b>, skrátene{' '}
        <b>DPIA</b> (z angl. <i>Data Protection Impact Assessment</i>). Táto povinnosť dopadá na tie situácie, kedy určitý druh spracúvania
        údajov bude mať <b>pravdepodobne za následok vysoké riziko pre práva a&nbsp;slobody fyzických osôb</b>
        ,<br /> a&nbsp;to najmä pri využívaní nových technológií.
        <br />
        <br />
        Princíp procesu DPIA spočíva v&nbsp;preverovaní všetkých aspektov súvisiacich s realizovaným spracúvaním, na základe ktorých možno
        identifikovať a&nbsp;následne analyzovať možné riziká. Po nadobudnutí znalosti o&nbsp;týchto rizikách môže prevádzkovateľ
        spracúvania následne zaviesť adekvátne nápravné opatrenia, ktorá umožnia identifikované riziká minimalizovať, ideálne odstrániť.
        DPIA možno teda označiť sa nástroj, ktorý pomáha prevádzkovateľom spracúvania identifikovať najefektívnejší spôsob, akým možno
        uviesť pravidlá na ochrana osobných údajov do súladu s&nbsp;Nariadením GDPR.
        <br />
        <br />
        Ako problematické sa môže zdať vôbec určenie, kedy je skutočne potrebné DPIA vykonať. Samotné Nariadenie (konkrétne článok 35 odst.
        3) GDPR uvádza demonštratívny výpis operácií s&nbsp;osobnými údajmi, pre ktoré je nutné posúdenie vplyvu na ochranu údajov vykonať.
        Jedná sa však len o&nbsp;zlomok možných situácií, ktoré to skutočne vyžadujú. Pracovná skupina WP29 vo svojich{' '}
        <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=611236">výkladových pokynoch</a> popisuje ešte
        konkrétnejšie kritériá, ktoré majú prevádzkovatelia zohľadniť pri hľadaní odpovede na otázku, či ich operácie s&nbsp;dátami
        predstavujú vysoké riziko pre práva a&nbsp;slobody fyzických osôb, a&nbsp;či teda podliehajú procesu komplexného posúdenia DPIA.
      </p>
    ),
  },
  DOTAZNIK: {
    title: null,
    body: <Questionnaire />,
  },
};

export const DPIA = CONTENT.DPIA;

export const HodnotenieRizik = () => {
  const [show, setShow] = useState(false);
  const [which, setWhich] = useState('');
  const [backdrop, setBackdrop] = useState(true);
  const handleClose = () => setShow(false);

  const displayModal = (which, event, backdrop_val = 'true') => {
    event.preventDefault();
    setWhich(CONTENT[which]);
    setBackdrop(backdrop_val);
    setShow(true);
  };

  return (
    <>
      <Section id="hodnotenie" className="bg-primary text-white">
        <Container>
          <SectionHeading text="Hodnotenie rizík"></SectionHeading>
          <Row className="text-center">
            <Col lg={6}>
              <p className="lead">
                Pre zaistenie súladu spracúvania údajov s&nbsp;Nariadením GDPR je nevyhnutné zabezpečiť všetky vykonávané činnosti
                s&nbsp;osobnými údajmi takým spôsobom, aby bolo možné dosiahnuť počas spracúvania primárny cieľ GDPR &ndash;{' '}
                <strong>ochrániť osobné údaje</strong>. Spracúvanie neposkytujúce dostatočnú ochranu možno označiť pojmom <b>rizikové</b>.
                Proces{' '}
                <b>
                  <u>
                    <a href="#hodnotenie" className="text-white text-nowrap" onClick={(e) => displayModal('HodnotenieRizik', e)}>
                      {lightbulb} hodnotenia rizík
                    </a>
                  </u>
                </b>{' '}
                umožňuje vzniku týchto nepriaznivých situácií predchádzať.
              </p>
            </Col>
            <Col lg={6}>
              <p className="lead">
                Hodnotenie rizík spočíva v&nbsp;
                <strong>pravidelnom monitorovaní a&nbsp;analyzovaní rizík</strong>, ktoré sa môžu nepriaznivo prejaviť pri vykonávaní
                činností súvisiacich so spracúvaním osobných údajov. Prevažná väčšina prevádzkovaných spracovateľských operácií avšak
                prináša pre práva a&nbsp;slobody dotknutých osôb vysoké riziko. Tieto činnosti si preto vyžadujú komplexnejšie posúdenie,
                kedy hovoríme o&nbsp;
                <b>
                  <u>
                    <a href="#hodnotenie" className="text-white text-nowrap" onClick={(e) => displayModal('DPIA', e)}>
                      {lightbulb} posúdení vplyvu na ochranu údajov
                    </a>
                  </u>
                </b>{' '}
                .
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg={12} className="border-top py-4 my-4">
              <p className="lead">
                Hodnotenie rizík predstavuje neoddeliteľnú súčasť spracovateľskej činnosti nad rôznorodou množinou osobných údajov. Nakoľko
                ide o&nbsp;proces, v&nbsp;ktorom je potrebné komplexne a&nbsp;zodpovedne vyhodnocovať všetky aspekty spracúvania, je jeho
                bezchybná realizácia pomerne náročná. Z&nbsp;toho dôvodu bola pre Vás pripravená aplikácia, ktorá Vám po vyplnení formulára
                poskytne približnú predstavu o&nbsp;tom, akú závažnosť rizika reflektuje Vami vykonávané spracúvanie údajov voči právam
                a&nbsp;slobodám dotknutých osôb.
              </p>
            </Col>
          </Row>
          <Row className="text-center my-5">
            <Col lg={10} className="mx-auto">
              <Button variant="outline-light" className="text-uppercase" size="xl" onClick={(e) => displayModal('DOTAZNIK', e, 'static')}>
                Prejsť na hodnotenie rizík
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>
      <CustomModal show={show} handleClose={handleClose} title={which.title} body={which.body} backdrop={backdrop} />
    </>
  );
};
