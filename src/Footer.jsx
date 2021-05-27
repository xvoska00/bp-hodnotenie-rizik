import { Container } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <Container></Container>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <Container>
          <small>
            Bakalárska práca &ndash; Hodnotenie rizík v ochrane osobných údajov.
            <br />
            Ⓒ 2021 Anna Voskárová
            <br />
            Tieto stránky sú licencované pod <a href="LICENSE.txt">MIT licenciou</a>.
          </small>
        </Container>
      </div>
    </>
  );
};
