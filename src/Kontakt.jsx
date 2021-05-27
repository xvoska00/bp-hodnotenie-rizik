import { Col, Container, Row } from 'react-bootstrap';
import { Section, SectionHeading } from './PageSection';

export const Kontakt = () => {
  return (
    <Section id="kontakt" className="text-color-dark">
      <Container>
        <SectionHeading text="Kontakt" dividerStyle="dark"></SectionHeading>
        <Row className="text-center">
          <Col lg={8} className="mx-auto">
            <p className="lead">
              Všetky Vaše otázky či prípadné pripomienky k obsahu informačného portálu môžete s autorkou zdieľať prostredníctvom e-mailovej
              komunikácie zaslaním Vašej správy na adresu xvoska00@vutbr.cz. Vaša spätná väzba pomôže ďalej zlepšovať kvalitu stránky a
              rozširovať možnosti aplikácie pre posudzovanie rizík spracovateľských činností.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
