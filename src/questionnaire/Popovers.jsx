import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger } from 'react-bootstrap';

/*
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
*/

export const InfoSource = ({ popover }) => (
  <OverlayTrigger trigger={['click', 'focus']} rootClose placement="left" overlay={popover}>
    <FontAwesomeIcon icon={faInfoCircle} style={{ cursor: 'pointer' }} />
  </OverlayTrigger>
);
