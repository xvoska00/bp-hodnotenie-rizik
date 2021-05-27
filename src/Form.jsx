import { Card, Form, ListGroup, Button, OverlayTrigger, Popover, FormCheck } from 'react-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Form.css';

const PMuted = ({ children }) => {
  return <p className="small text-muted font-italic mb-4">{children}</p>;
};

export const Questionnaire = () => {
  const [submittedData, setSubmittedData] = useState(null);

  if (submittedData) {
    return <pre> Data: {JSON.stringify(submittedData, null, 2)}</pre>;
  } else {
    return <DotaznikForm onSubmit={setSubmittedData} />;
  }
};

const popoverA1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      Do kategórie <i>&bdquo;zvláštnych údajov&ldquo;</i> podľa Nariadenia GDPR možno zaradiť tzv. <b>citlivé osobné údaje</b>, ktoré
      predstavujú špeciálnu kategóriu osobných údajov. Medzi citlivé osobné údaje radíme údaje o&nbsp;rasovom či etnickom pôvode,
      politických názoroch, náboženskom alebo filozofickom vyznaní, členstve v&nbsp;odboroch, o&nbsp;zdravotnom stave, sexuálnej orientácií
      a&nbsp;trestných deliktoch či právomocnom odsúdení osôb. Tieto údaje môžu subjekt údajov samé o sebe v rámci spoločnosti,
      v&nbsp;zamestnaní, v&nbsp;škole, či môžu zapríčiniť až jeho diskrimináciu. Do kategórie citlivých údajov GDPR zahŕňa taktiež genetické
      a&nbsp;biometrické údaje.
    </Popover.Content>
  </Popover>
);

const popoverA2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      Spracúvanie osobných údajov možno označiť pojmom <b>profilovanie</b> v prípade, ak je vykonávané <b>automatizovaným</b> spôsobom a ak
      sú zhromaždené údaje následne použité na <b>vyhodnotenie určitých osobných aspektov</b> týkajúcich sa dotknutej osoby. <br />
      <br />
      Medzi konkrétne príklady patrí analýza alebo predvídanie aspektov týkajúcich sa pracovného výkonu fyzickej osoby, majetkových pomerov,
      zdravia, osobných preferencií, záujmov, spoľahlivosti, správania, polohy alebo pohybu.
      <br />
      <br />
      Taktiež sem spadá aj vykonávanie spracúvania za účelom monitorovania dotknutej osoby, kedy je daná osoba sledovaná na internete,
      vrátane potenciálneho následného používania techník spracúvania údajov, ktoré pozostávajú z profilovania jednotlivca. A to najmä za
      účelom prijímania rozhodnutí týkajúcich sa dotknutej osoby alebo analýzy či predvídania jej osobných preferencií, správania
      a&nbsp;postojov.
      <br />
      <br />
      Pod pojmom{' '}
      <b>
        <i>&bdquo;automatizované&ldquo;</i>
      </b>{' '}
      spracúvanie rozumieme také činnosti, ktoré sú vykonávané spravidla prostredníctvom výpočetnej techniky.
    </Popover.Content>
  </Popover>
);

const popoverD = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p className="mb-0">
        Pri rozhodovaní o <b>rozsahu spracúvania</b> je potrebné zvážiť nasledovné faktory: <br />
      </p>
      <ul>
        <li>počet dotknutých osôb, ktorých osobné údaje sú zaznamenávané,</li>
        <li>rozsah údajov (tj. počet rôznych kategórií údajov), ktoré sa spracúvajú,</li>
        <li>dĺžka trvania spracúvania,</li>
        <li>geografický rozsah činností spracúvania.</li>
      </ul>
    </Popover.Content>
  </Popover>
);

const popoverF = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p className="mb-0">
        Medzi výnimky realizácie spracúvania na základe iného zákonného titulu, než je súhlas dotknutej osoby, definované{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          článkom 6 odst. 1 písm. b) - f) Nariadenia GDPR
        </a>
        , patria nasledovné:
      </p>
      <ul>
        <li>spracúvanie nevyhnutné pre plnenie zmluvy,</li>

        <li>spracúvanie nevyhnutné pre dodržanie zákonnej povinnosti prevádzkovateľa,</li>
        <li>ochrana životne dôležitých záujmov subjektov údajov,</li>
        <li>
          spracúvanie nevyhnutné pre plnenie úlohy vo verejnom záujme alebo pri výkone verejnej moci, ktorým je prevádzkovateľ poverený,
        </li>
        <li>nevyhnutnosť spracúvania pre ochranu práv a právom chránených záujmov prevádzkovateľa, príjemcu alebo inej dotknutej osoby.</li>
      </ul>
    </Popover.Content>
  </Popover>
);

const popoverH1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p>
        <b>Automatizované spracúvanie</b> osobných údajov je spravidla vykonávané s pomocou informačných systémov, tj. prostredníctvom
        software, ktorý v rámci činnosti automatizovane uplatňuje vlastnú rozhodovaciu logiku. Zjednodušene možno za
        &bdquo;automatizované&ldquo; spracúvanie považovať také činnosti, ktoré sú vykonávané prostredníctvom výpočetnej techniky.
      </p>
    </Popover.Content>
  </Popover>
);

const popoverK1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Doplnkové informácie</Popover.Title>
    <Popover.Content>
      <p class="mb-0">
        Nariadenie GDPR pripisuje subjektom údajov práva, pomocou ktorých môže daný subjekt (v prípustnej miere) zasahovať do priebehu
        vykonávaného spracúvania. Podľa{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          článku 12 až 22 Nariadenia GDPR
        </a>{' '}
        má subjekt údajov nasledovné práva:
      </p>
      <ul>
        <li>právo byť informovaný o spracúvaní osobných údajov,</li>
        <li>právo na prístup k osobným údajom,</li>
        <li>právo na opravu, resp. doplnenie spracúvaných údajov,</li>
        <li>právo na výmaz, tj. byť &bdquo;zabudnutý&ldquo; po naplnení účelu spracúvania,</li>
        <li>právo na obmedzenie rozsahu spracúvania,</li>
        <li>právo na prenositeľnosť údajov,</li>
        <li>právo vzniesť námietku voči vykonávanému spracúvaniu,</li>
        <li>a právo na ochranu pred automatizovaným individuálnym rozhodovaním, vrátane profilovania.</li>
      </ul>
    </Popover.Content>
  </Popover>
);

const InfoSource = ({ popover }) => (
  <OverlayTrigger trigger={['click', 'focus']} placement="left" overlay={popover}>
    <FontAwesomeIcon icon={faInfoCircle} className="float-right" style={{ cursor: 'pointer' }} />
  </OverlayTrigger>
);

export const DotaznikForm = ({ onSubmit }) => {
  const [error, setError] = useState(false);

  return (
    <>
      <PMuted>
        V tejto časti bude pozornosť venovaná Vami realizovanému procesu spracúvania údajov. Vyplňťe, prosím, nasledujúci formulár, v ktorom
        bližšie špecifikujete vykonávanú spracovateľskú činnosť.
      </PMuted>

      <Form
        className="text-left"
        style={{ fontSize: '93%' }}
        onSubmit={(ev) => {
          ev.preventDefault();

          const data = {
            A1: ev.target['A1'].checked,
            A2: ev.target['A2'].checked,
            A3: ev.target['A3'].checked,
            A4: ev.target['A4'].checked,
            A5: ev.target['A5'].checked,
            A6: ev.target['A6'].checked,

            B1: ev.target['B1'].checked,
            B2: ev.target['B2'].checked,
            B3: ev.target['B3'].checked,
            B4: ev.target['B4'].checked,

            C: ev.target['C'].value,
            D: ev.target['D'].value,
            E: ev.target['E'].value,
            F: ev.target['F'].value,
            G: ev.target['G'].value,
            H: ev.target['H'].value,
            I: ev.target['I'].value,
            J: ev.target['J'].value,
            K: ev.target['K'].value,
            L: ev.target['L'].value,
          };

          console.log(data);

          for (const property in data) {
            const value = data[property];
            if (value === '') {
              setError(true);
              console.log('Value for ', property, 'is not set');
              return;
            }
          }

          onSubmit(data);
        }}
      >
        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Kategórie zhromažďovaných údajov</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tie, ktoré vyhodníte v otázke Vami realizovaného spracúvania údajov ako pravdivé.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="checkbox" id="A1" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    sú spracúvané zvláštne kategórie údajov a údaje týkajúce sa rozsudkov trestných činov spáchaných subjektom údajov{' '}
                    <InfoSource popover={popoverA1} />
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="A2" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    zaznamenané údaje je možné využiť pre profilovanie užívateľov alebo pre účely automatizovaného rozhodovania{' '}
                    <InfoSource popover={popoverA2} />
                    <PMuted>
                      napr. údaje z logov, história navštívených webových stránok, údaje vypovedajúce o uskutočnení telefonických hovorov,
                      údaje vypovedajúce o využívaní kounikácie prostredníctvom elektronickej pošty + finančné údaje- o stave majetku, výška
                      disponibilných finančných prostriedkov, údaje o pôžičkách a finančných dlhoch
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="A3" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    údaje, ktoré umožňujú, v prípade ich zneužitia, vystupovať v mene subjektu údajov
                    <PMuted>prístupové meno, heslo/PIN, pseudonym</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="A4" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    údaje umožňujúce jednoznačnú identifikáciu subjektu údajov
                    <PMuted>
                      spracovanie zahŕňa - spoločne meno, priezvisko, titul, dátum narodenia; ďalej sem radíme jednoznačné identifikátory
                      ako napríklad rodné číslo, číslo občianskeho preukazu, číslo vodičského preukazu, číslo cestovného dokladu (pas),
                      číslo sociálneho poistenia, číslo zdravotného poistenia
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="A5" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    údaje umožňujúce prístup a manipuláciu k finančným prostriedkom subjektu údajov
                    <PMuted>
                      spracovanie zahŕňa údaje- meno aj priezvisko, dátum narodenia, adresa pobytu, číslo platobnej karty, heslo/PIN,
                      telefónne číslo, e-mailová adresa, informácie o vlastníctvach subjektu údajov
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="A6" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    ostatné osobné údaje
                    <PMuted>
                      údaje, ktoré samé o sebe neumožnia jednoznačnú identifikáciu - softbiometrické údaje (váha, výška, vek, pohlavie,
                      farba vlasov, farba očí, typ postavy apod.), bežné obrazové záznamy, ktoré vznikli z dôvodu oprávneného monitorovania
                      určitej oblasti napr. pre zaistenie bezpečnosti atď.
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Identifikácia dotknutej osoby</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tie, ktoré vyhodníte v otázke Vami realizovaného spracúvania údajov ako pravdivé.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="checkbox" id="B1" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať a lokalizovať
                    <PMuted>jedná sa najmä o spracovanie údajov monitorujúcich pohyb identifikovateľných subjekov údajov</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="B2" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať a rozpoznať
                    <PMuted>jedná sa najmä o spracovanie obrazových záznamov identifikovateľných subjektov údajov</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="B3" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    na základe zaznamenaných údajov je možné subjekt jednoznačne identifikovať
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>

              <ListGroup.Item>
                <FormCheck type="checkbox" id="B4" custom>
                  <FormCheck.Input />
                  <FormCheck.Label className="d-block">
                    na základe zaznamenaných údajov nie je možné subjekt jednoznačne identifikovať
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Subjekt údajov</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="C1" custom>
                  <FormCheck.Input name="C" type="radio" value={1} />
                  <FormCheck.Label className="d-block">
                    subjekt údajov spadá do kategórie stále zraniteľných subjektov
                    <PMuted>
                      do tejto kategórie radíme osoby, ktoré sa v rámci celej spoločnosti dostávajú, na základe istých špecifických prvkov,
                      do znevýhodnenej pozície - vymedzené skupiny obyvateľstva podľa národnosti, náboženstva, sexuálnej orientácie,
                      telesného a mentálneho hendikepu, odsúdenia za spáchanie trestného činu apod.
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="C2" custom>
                  <FormCheck.Input name="C" type="radio" value={2} />
                  <FormCheck.Label className="d-block">
                    subjekt údajov z istého dôvodu v danej fáze svojho života spadá do skupiny zraniteľných subjektov
                    <PMuted>
                      do tejto kategórie radíme osoby, ktoré nemožno považovať za osoby stále znevýhodnené, avšak počas určitého obdobia
                      svojho života nadobúdajú isté faktory, ktoré ich stavajú do znevýhodnenej pozície voči celej spoločnosti - migranti,
                      osoby liečacie sa zo závažného ochorenia, staršie osoby (v dôchodkovom veku), deti a mladiství
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="C3" custom>
                  <FormCheck.Input name="C" type="radio" value={3} />
                  <FormCheck.Label className="d-block">
                    subjekt údajov nedisponuje vlastnosťami, na základe ktorých ho možno zaradiť do skupiny zraniteľných subjektov
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">
              Rozsah vykonávania spracúvania <InfoSource popover={popoverD} />
            </h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="D1" custom>
                  <FormCheck.Input name="D" type="radio" value={1} />
                  <FormCheck.Label className="d-block">
                    spracúvanie údajov je vykonávané vo veľkom rozsahu
                    <PMuted>veľké - viac než 10 tisíc subjektov údajov</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="D2" custom>
                  <FormCheck.Input name="D" type="radio" value={2} />
                  <FormCheck.Label className="d-block">
                    spracúvanie údajov je vykonávané vo veľkom rozsahu
                    <PMuted>xxx</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="D3" custom>
                  <FormCheck.Input name="D" type="radio" value={3} />
                  <FormCheck.Label className="d-block">
                    spracúvanie údajov je vykonávané vo veľkom rozsahu
                    <PMuted>xxx</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Sú údaje po ich zaznamenaní verejne dostupné?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="E1" custom>
                  <FormCheck.Input name="E" type="radio" value={true} />
                  <FormCheck.Label className="d-block">
                    áno, zaznamenané údaje sú verejne prístupné
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="E2" custom>
                  <FormCheck.Input name="E" type="radio" value={false} />
                  <FormCheck.Label className="d-block">
                    nie, zaznamenané údaje nie sú verejne prístupné
                    <PMuted></PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">
              Je spracúvanie vykonávané na základe právneho titulu, ktorý nevyžaduje súhlas dotknutej osoby?{' '}
              <InfoSource popover={popoverF} />
            </h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="F1" custom>
                  <FormCheck.Input name="F" type="radio" value={true} />
                  <FormCheck.Label className="d-block">
                    áno
                    <PMuted>
                      zákonnosť spracúvania je podložená niektorou z výnimiek uvedených v čl. 6 odst. 1 písm b) - f) Nariadenia GDPR
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="F2" custom>
                  <FormCheck.Input name="F" type="radio" value={false} />
                  <FormCheck.Label className="d-block">
                    nie
                    <PMuted>zákonnosť spracúvania je podložená vyjadrením súhlasu dotknutej osoby s realizovaným spracúvaním</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Je spracúvanie údajov realizované nepretržite?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="G1" custom>
                  <FormCheck.Input name="G" type="radio" value={true} />
                  <FormCheck.Label className="d-block">
                    áno
                    <PMuted>Jedná sa o dlhodobé, sústavné, systematické spracúvanie.</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="G2" custom>
                  <FormCheck.Input name="G" type="radio" value={false} />
                  <FormCheck.Label className="d-block">
                    nie
                    <PMuted>Jedná sa o krátkodobé, jednorazové, dočasné, príležitostné spracúvanie.</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Sú pre realizáciu spracúvania využívané automatizované systémy vrátane umelej inteligencie?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="H1" custom>
                  <FormCheck.Input name="H" type="radio" value={true} />
                  <FormCheck.Label className="d-block">
                    áno <InfoSource popover={popoverH1} />
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="H2" custom>
                  <FormCheck.Input name="H" type="radio" value={false} />
                  <FormCheck.Label className="d-block">
                    nie
                    <PMuted>
                      Spracúvanie je realizované jednoduchým zreťazením základných operácií postavených na princípe ľahko realizovateľného a
                      pochopiteľného výpočtového algoritmu
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">
              Dochádza ku kombinovaniu zaznamenaných údajov s&nbsp;údajmi, ktoré boli získané v rámci plnenia iného účelu?
            </h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="I1" custom>
                  <FormCheck.Input name="I" type="radio" value={true} />
                  <FormCheck.Label>áno</FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="I2" custom>
                  <FormCheck.Input name="I" type="radio" value={false} />
                  <FormCheck.Label>nie</FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Existujú tretie strany, ktorým sú zaznamenané údaje poskytované?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="J1" custom>
                  <FormCheck.Input name="J" type="radio" value={1} />
                  <FormCheck.Label>
                    áno; osobné údaje sú predávané do štátov z nezaistenou úrovňou ochrany mimo EÚ
                    <PMuted>súčinnosť s daným typom tretej strany je vykonávaná na základe článku 49 Nariadenia</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="J2" custom>
                  <FormCheck.Input name="J" type="radio" value={2} />
                  <FormCheck.Label>
                    áno; osobné údaje sú predávané do štátov so zaistenou úrovňou ochrany mimo EÚ
                    <PMuted>súčinnosť s daným typom tretej strany je vykonávaná na základe článku 46 Nariadenia</PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="J3" custom>
                  <FormCheck.Input name="J" type="radio" value={3} />
                  <FormCheck.Label>áno, osobné údaje sú predávané do štátov so zaistenou úrovňou ochrany v rámci EÚ</FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="J4" custom>
                  <FormCheck.Input name="J" type="radio" value={4} />
                  <FormCheck.Label>nie, osobné údaje nie sú predávané tretím stranám</FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Môže si subjekt údajov uplatniť práva k prebiehajúcemu spracúvaniu?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="K1" custom>
                  <FormCheck.Input name="K" type="radio" value={true} />
                  <FormCheck.Label className="d-block">
                    subjekt údajov má právo ovplyvniť spracúvanie údajov a ich prípadné poskytovanie <InfoSource popover={popoverK1} />
                    <PMuted>
                      Jedná sa o spracovania, kedy si subjekt môže bez problémov presadiť všetky práva vyplývajúce z Nariadenia GDPR
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="K2" custom>
                  <FormCheck.Input name="K" type="radio" value={false} />
                  <FormCheck.Label>
                    subjekt údajov nemá právo ovyplvniť spracúvanie údajov a ich prípadné poskytovanie
                    <PMuted>
                      Jedná sa o spracovania, kedy si subjekt môže len obmedzene alebo vôbec nemôže presadiť svoje práva vyplývajúce z
                      Nariadenia GDPR. Jedná sa najmä o spracovania založené na plnení zákonnej povinnosti prevádzkovateľa.
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card className="shadow border-0 mb-5">
          <Card.Body className="p-5">
            <h2 className="h4 mb-1">Je dočasná nedostupnosť spracúvaných údajov prijateľná?</h2>
            <PMuted>
              Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.
            </PMuted>
            <ListGroup as="ul">
              <ListGroup.Item>
                <FormCheck type="radio" id="L1" custom>
                  <FormCheck.Input name="L" type="radio" value={true} />
                  <FormCheck.Label>
                    nedostupnosť spracúvaných údajov je prijateľná
                    <PMuted>
                      Jedná sa o spracovania, kedy by nedostupnosť osobných údajov nespôsobila kritické obtiaže pre subjekt údajov.
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
              <ListGroup.Item>
                <FormCheck type="radio" id="L2" custom>
                  <FormCheck.Input name="L" type="radio" value={false} />
                  <FormCheck.Label>
                    nedostupnosť spracúvaných údajov nie je prijateľná
                    <PMuted>
                      Jedná sa o spracovania, kedy by nedostupnosť osobných údajov mohla mať za následok vznik kritickej situácie pre
                      subjekt údajov, napr. nedostupnosť zdravotnej dokumentácie pacienta pri nasadzovaní liečby.
                    </PMuted>
                  </FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {error && (
          <div class="alert alert-warning" role="alert">
            Dotaznik nie je kompletne vyplneny. Vyplnte vsetky polia a skuste to znova.
          </div>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
