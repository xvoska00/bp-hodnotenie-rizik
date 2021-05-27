import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './Header.css';
import gdpr from './assets/img/gdpr.png';
import { Divider } from './Divider';

export const Masthead = () => {
  return (
    <Jumbotron fluid="true" className="masthead bg-primary text-center text-white mb-0">
      <Container className="d-flex align-items-center flex-column">
        <img className="masthead-logo mb-4" src={gdpr} alt="gdpr"></img>
        <h1 className="masthead-heading text-uppercase">
          GDPR ako prostriedok
          <br className="big" />
          ochrany osobných údajov
        </h1>
        <Divider />
        <p className="masthead-subheading font-weight-light mb-0">osobné údaje &ndash; riziko spracúvania &ndash; Nariadenie GDPR</p>
      </Container>
    </Jumbotron>
  );
};
