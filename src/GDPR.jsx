import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { faLightbulb, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Section, SectionHeading } from './PageSection';
import { CustomModal } from './Modal';

const lightbulb = <FontAwesomeIcon icon={faLightbulb} />;
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
const times = <FontAwesomeIcon icon={faTimes} />;

const GDPR_INFO = [
  {
    title: 'Čo je to GDPR?',
    body: (
      <p>
        <b>Nariadenie Európskeho parlamentu a&nbsp;Rady (EÚ) 2016/679</b> o&nbsp;ochrane fyzických osôb pri spracúvaní osobných údajov
        a&nbsp;o&nbsp;voľnom pohybe takýchto údajov. <br />
        <br />
        Jedná sa nariadenie platné v rámci členských štátov Európskej Únie, všeobecne známe pod skratkou <b>GDPR</b> (z&nbsp;angl.{' '}
        <i>General Data Protection Regulation</i>), ktoré vstúpilo záväzne do platnosti 25.&thinsp;5.&thinsp;2018 a&nbsp;prinieslo do
        európskej legislatívy niekoľko zmien v&nbsp;súvislosti so spracúvaním osobných údajov za účelom posilnenia ich ochrany.
      </p>
    ),
  },
  {
    title: 'Prečo GDPR vzniklo?',
    body: (
      <p>
        Zámerom zákonodarcov bolo predovšetkým prostredníctvom nového nariadenia umožniť občanom Európskej Únie pevnejšiu kontrolu nad
        svojimi osobnými údajmi. Je teda zrejmé, že sa jedná o právnu úpravu <b>posilňujúcu práva subjektov údajov</b>. Konkrétne si
        Nariadenie GDPR kladie za cieľ <b>chrániť osobné údaje</b> všetkých fyzický osôb, či už sa jedná o&nbsp;spotrebiteľov, zákazníkov,
        zamestnancov, ale aj samostatne zárobkovo činné osoby.
        <br />
        <br />
        Oproti tomu nedopadá na právnické osoby, tj. obchodné korporácie ako také, avšak zahŕňa aj okruh osobných údajov takých fyzických
        osôb, ktoré v&nbsp;právnických osobách vystupujú napr. ako ich štatutárne orgány, spoločníci či kontaktné osoby.
      </p>
    ),
  },
  {
    title: 'Kto musí dodržiavať pokyny GDPR?',
    body: (
      <p>
        Povinnosti stanovené Nariadením GDPR dopadajú na <b>každý subjekt, ktorý spracúva osobné údaje</b> napr. o&nbsp;svojich klientoch,
        obchodných partneroch, zákazníkoch či zamestnancoch. Nie je teda pravdou, že povinnosť dodržiavať pokyny stanovené Nariadením GDPR
        majú len veľké, často nadnárodné spoločnosti, nemocnice, bankové inštitúcie či&nbsp;správne orgány. <br />
        <br />
        Nariadením GDPR sa prakticky musí riadiť každý subjekt, ktorý má aspoň jedného zamestnanca, nakoľko práve o&nbsp;tomto zamestnancovi
        spracúva jeho osobné údaje. Dopady Nariadenia GDPR sú teda pomerne široké a&nbsp;je nesprávne domnievať sa, že malé či stredné
        podniky alebo osoby samostatne zárobkovo činné sa pokynmi Nariadenia GDPR vôbec riadiť nemusia.
      </p>
    ),
  },
  {
    title: 'Ako je vymedzená zákonnosť spracúvania?',
    body: (
      <p>
        Každé vykonávané spracúvanie údajov môže byť realizované len z&nbsp;dôvodu plnenia <b>presne a&nbsp;jasne vymedzeného účelu</b>.
        Účel definuje, aké kategórie údajov budú zhromažďované, v&nbsp;akom rozsahu a&nbsp;z&nbsp;akého dôvodu je nutné tieto údaje
        spracúvať.
        <br />
        <br />
        Stanovený účel musí byť podložený <b>zákonným titulom</b> spracúvania. Ten možno chápať ako isté oprávnenie, na základe ktorého je
        možné spracúvanie údajov pre dosiahnutie vymedzeného účelu vôbec realizovať.
      </p>
    ),
  },
  {
    title: 'Čo musí byť dodržiavané pri spracúvaní údajov?',
    body: (
      <p>
        <b>Zásady spracúvania</b> predstavujú základné piliére umožňujúce vytvorenie súladu vykonávaných činností s&nbsp;Nariadením GDPR.
        Možno ich chápať ako <b>vlastnosti, ktoré musí spracovateľská operácia spĺňať</b>, aby nedochádzalo k&nbsp;porušovaniu požiadaviek
        vyplývajúcich z&nbsp;Nariadenia GDPR. Viažu sa k&nbsp;realizácii konkrétnych činností vykonávaných v&nbsp;rámci procesu sprcúvania
        údajov a&nbsp;ich <b>dodržanie je pre prevádzkovateľa záväzné</b>.
        <br />
        <br />
        Výpis jednotlivých zásad, ktoré sú definované článkom&nbsp;5 Nariadenia GDPR, spoločne s&nbsp;ich vysvetlením nájdete
        v&nbsp;nasledujúcej sekcii tejto webovej stránky.
      </p>
    ),
  },
  {
    title: 'Aké práva pripisuje GDPR dotknutým osobám?',
    body: (
      <p>
        Nariadenie GDPR definuje <b>nové práva prislúchajúce dotknutým osobám</b>. Okrem toho, že majú nárok byť o&nbsp;svojich právach{' '}
        <b>dôkladne informované</b>, môžu taktiež vyžadovať po prevádzkovateľoch isté zmeny vo vykonávanom spracúvaní v&nbsp;prípade, kedy
        to vzniknuté okolnosti súvisiace s realizovaným sprácuvaním umožňujú. Jedná sa napríklad o&nbsp;
        <b>právo vzniesť námietku voči spracúvaniu</b>, ktoré zákonne nespĺňa požiadavky vyplývajúce z&nbsp;Nariadenia GDPR, či právo na
        doplnenie, resp. akúkoľvek <b>úpravu spracúvaných údajov</b> do takej podoby, aby nepochybne odzrkadľovali realitu.
        <br />
        <br />
        Dotknutá osoba má taktiež <b>právo na prenositeľnosť osobných údajov</b> od jedného prevádzkovateľa k&nbsp;inému, pokiaľ sú údaje
        spracúvané automatizovane.
        <br />
        <br />
        Úplne novým elementom je <b>právo na výmaz</b> a&nbsp;jeho rozšírenie na <b>právo &bdquo;byť zabudnutý&ldquo;</b>, vďaka ktorému
        môže osoba požadovať, aby boli boli bez zbytočného odkladu vymazané jej osobné údaje, pokiaľ neexistuje právny dôvod pre ich ďalšie
        spracúvanie.
      </p>
    ),
  },
  {
    title: 'Ako zaistiť súlad spracúvania s\xa0GDPR?',
    body: (
      <p>
        Vykonávať spracúvanie osobných údajov v&nbsp;súlade s&nbsp;Nariadením GDPR znamená vykonávať spracúvanie takým spôsobom, aby boli
        dodržané základné ciele, ku ktorým Nariadenie GDPR smeruje &ndash;{' '}
        <b>ochrana spracúvaných údajov a&nbsp;tým aj ochrana práv a&nbsp;slobôd fyzických osôb</b>
        .<br />
        <br />
        V&nbsp;rámci spracúvania údajov je potrebné predchádzať takým situáciám, ktoré by potenciálne mohli narušiť bezpečnosť údajov. Vznik
        takýchto{' '}
        <b>
          <i>rizikových</i>
        </b>{' '}
        situácií je potrebné včas odhaliť, aby bolo možné zaviesť náležité technické a&nbsp;organizačné opatrenia, ktoré by ich vznik
        a&nbsp;následný dopad minimalizovali, ideálne eliminovali v&nbsp;celom rozsahu. Prevádzkovateľ by mal preto aktívne vykonávať proces{' '}
        <b>hodnotenia rizík</b>, ktorý umožní identifikovať potenciálne riziká v&nbsp;rámci vykonávaného spracúvania a&nbsp;poskytne
        prevádzkovateľovi odpoveď na otázku, v&nbsp;ktorých miestach jeho činností je potrebné prijať opatrenia, aby vykonávané spracúvanie
        nespôsobilo nepriaznivý zásah do práv a&nbsp;slobôd subjektov údajov.
      </p>
    ),
  },
  {
    title: 'Čo ak bude bezpečnosť údajov narušená?',
    body: (
      <p>
        V&nbsp;prípade, že nastane situácia, v&nbsp;rámci ktorej je zaznamenané potenciálne riziko úniku či ohrozenia zabezpečenia osobných
        údajov, je prevádzkoavteľ povinný ohlásiť vznik tejto situácie <b>dozornému úradu</b>. Na území Českej republiky funkciu dozorného
        úradu zastrešuje{' '}
        <b>
          <i>Úřad pro ochranu osobních údajů</i>
        </b>
        .<br />
        <br />
        Prevádzkovateľ je o&nbsp;vzniku nepriaznivých situácií ohrozujúcich bezpečnosť spracúvaných údajov rovnako povinný{' '}
        <b>informovať aj osoby a&nbsp;subjekty</b>, ktorých sa zásah do bezpečnosti údajov týkal, nakoľko takýto zásah môže vysoko
        pravdepodobne nepriaznivo ovplyvniť ich základné práva a&nbsp;slobody.
      </p>
    ),
  },
  {
    title: 'Čo ak prevádzkovateľ pokyny GDPR nedodrží?',
    body: (
      <p>
        Za nedodržanie pravidiel vyplývajúcich z&nbsp;Nariadenia GDPR hrozí prevádzkovateľovi postih formou{' '}
        <b>správnej pokuty vo výške až 20&nbsp;miliónov&nbsp;€</b>, alebo v&nbsp;prípade podniku{' '}
        <b>až do výšky 2&thinsp;% celkového ročného obratu</b> spoločnosti.
        <br />
        <br />
        Výška udelenej pokuty za nerešpektovanie povinnosti dodržiavať zásady stanovené Nariadením GDPR sa určuje na základe{' '}
        <b>miery previnenia</b>, ktorá odzrkadľuje mnohé aspekty uskutočňovaných činností s&nbsp;osobnými údajmi. Miera previnenia
        v&nbsp;sebe zahŕňa napríklad okolnosti, či bolo nerešpektovanie pokynov Nariadenia GDPR úmyselné alebo nedbalostné, aká bola miera
        spôsobenej škody (počet dotknutých subjektov, rozsah a&nbsp;kategórie príslušných údajov), či&nbsp;prevádzkovateľ prijal isté
        opatrenia k&nbsp;zmierneniu škody a&nbsp;ak áno, tak o&nbsp;aké opatrenia sa jedná, do akej miery bola zabezpečená spolupráca
        s&nbsp;dozorným orgánom, či bol o&nbsp;úniku informácií patrične informovaný príslušný dozorný úrad a&nbsp;mnohé iné.
      </p>
    ),
  },
];

const Prehliadka = ({ handleClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const handle_next = () => setCurrentPage((page) => page + 1);

  const current_page_data = GDPR_INFO[currentPage];
  const has_next = currentPage + 1 < GDPR_INFO.length;
  var button;

  if (has_next) {
    button = (
      <Button variant="outline-dark" onClick={handle_next}>
        {arrowRight} Ďalej
      </Button>
    );
  } else {
    button = (
      <Button variant="outline-dark" onClick={handleClose}>
        {times} Ukončiť prehliadku
      </Button>
    );
  }

  const body = (
    <>
      {current_page_data.body}
      <div className="mt-5">
        <span className="float-left text-muted">
          {currentPage + 1}/{GDPR_INFO.length}
        </span>
        <span className="float-right">{button}</span>
      </div>
    </>
  );

  return <CustomModal show={true} handleClose={handleClose} title={current_page_data.title} body={body} />;
};

export const GDPR = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Section id="gdpr" className="bg-primary text-white">
      <Container>
        <SectionHeading text="GDPR"></SectionHeading>
        <Row className="text-center">
          <Col lg={10} className="mx-auto">
            <p className="lead">
              Nariadenie GDPR vstúpilo do platnosti pomerne nedávno so snahou priniesť do oblasti legislatívy spojenej s problematikou
              ochrany osobných údajov nové, prelomové riešenia. Upevňuje postavenie fyzických osôb ako subjektov spracúvaných údajov,
              pripisuje im mnohé privilégiá, posilňuje ochranu ich údajov a naopak zavádza povinnosti pre prevádzkovateľov, ktorí s danými
              údajmi manipulujú. Jedná sa teda o dokument poskytujúci komplexný pohľad na plnohodnotnú ochranu osobných údajov pri ich
              každodennom používaní.
            </p>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <Col lg={10} className="mx-auto">
            <Button variant="outline-light" size="xl" onClick={handleShow}>
              {lightbulb} Chcem sa dozvedieť viac!
            </Button>
            {show && <Prehliadka handleClose={handleClose}></Prehliadka>}
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg={10} className="mx-auto">
            <p>
              Celé znenie Nariadenia GDPR je dostupné na{' '}
              <a
                className="text-color-dark"
                href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1"
              >
                týchto stránkach
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
