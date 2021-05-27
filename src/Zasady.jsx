import { Col, Container, Row } from 'react-bootstrap';
import { Section, SectionHeading } from './PageSection';

import './Zasady.css';

import img_01 from './assets/img/01.png';
import img_02 from './assets/img/02.png';
import img_03 from './assets/img/03.png';
import img_04 from './assets/img/04.png';
import img_05 from './assets/img/05.png';
import img_06 from './assets/img/06.png';
import img_07 from './assets/img/07.png';

const TIMELINE_ITEMS = [
  {
    img: img_01,
    title: 'zákonnosť, korektnosť, transparentnosť',
    text:
      'prevádzkovateľ musí spracovávať osobné údaje na základe najmenej jedného právneho dôvodu a\xa0voči subjektom údajov transparentne',
  },
  {
    img: img_02,
    title: 'obmedzenie účelu',
    text:
      'osobné údaje musia byť zhromažďované pre konkrétne a\xa0legitímne účely a\xa0nesmú byť spracúvané spôsobom nezlúčiteľným s\xa0týmito účelmi',
  },
  {
    img: img_03,
    title: 'minimalizácia údajov',
    text: 'zhromažďované osobné údaje musia byť primerané a\xa0relevantné vo vzťahu k\xa0účelu, pre ktorý sú spracúvané',
  },
  {
    img: img_04,
    title: 'presnosť',
    text: 'zhromažďované údaje musia byť presné, v\xa0prípade zistenia nepresností je nutné spracúvané údaje doplniť či upraviť',
  },
  {
    img: img_05,
    title: 'obmedzenie uloženia',
    text:
      'osobné údaje by mali byť uložené vo forme umožňujúcej identifikáciu subjektu len počas doby nevyhnutnej pre dané účely, pre ktoré sú spracúvané',
  },
  {
    img: img_06,
    title: 'integrita a dôvernosť',
    text: 'nutná implementácia relevantných technických a\xa0organizačných prostriedkov podporujúcich zabezpečenie osobných údajov',
  },
  {
    img: img_07,
    title: 'zodpovednosť prevádzkovateľa',
    text:
      'spracúvanie osobných údajov musí byť realizované v\xa0súlade s\xa0uvedenými zásadami, prevádzkovateľ musí byť schopný dodržaný súlad preukázať',
  },
];

export const Zasady = () => {
  return (
    <Section id="zasady" className="text-color-dark">
      <Container>
        <SectionHeading text="ZÁSADY SPRACOVANIA OSOBNÝCH ÚDAJOV" dividerStyle="dark" />
        <Row className="pb-5 text-center">
          <Col>
            <span>
              Zásady popisujú, čo musíte ako prevádzkovateľ dodržať, aby boli Vaše spracovateľské činnosti v&nbsp;súlade s&nbsp;Nariadením
              GDPR.
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <ul className="timeline">
              {TIMELINE_ITEMS.map((item, index) => {
                return (
                  <li key={index} className={index % 2 ? 'timeline-inverted' : ''}>
                    <div className="timeline-image">
                      <img className="rounded-circle img-line" src={item.img} alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <br />
                        <h5>{item.title}</h5>
                      </div>
                      <div className="timeline-body">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
