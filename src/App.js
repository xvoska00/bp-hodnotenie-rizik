import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './Navbar';
import { Masthead } from './Header';
import { Uvod } from './Uvod';
import { GDPR } from './GDPR';
import { HodnotenieRizik } from './HodnotenieRizik';
import { Zasady } from './Zasady';
import { Kontakt } from './Kontakt';
import { Footer } from './Footer';
import { Disclaimer } from './Disclaimer';

function App() {
  return (
    <>
      <NavBar />
      <Masthead />
      <Uvod />
      <GDPR />
      <Zasady />
      <HodnotenieRizik />
      <Kontakt />
      <Footer />
      <Disclaimer />
    </>
  );
}

export default App;
