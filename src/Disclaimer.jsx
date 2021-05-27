import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CustomModal } from './Modal';

export const Disclaimer = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const DisclaimerContent = (
    <>
      <p className="mb-4">
        Vstupujete na stránku, ktorej primárnym účelom je rozšírenie všeobecného povedomia <br />
        o&nbsp;problematike ochrany osobných údajov pri ich spracúvaní. Na tejto stránke sa nachádza taktiež aplikácia pre vyhodnocovanie
        zavážnosti rizík vyplývajúcich z&nbsp;realizácie procesu spracúvania osobných údajov. Dovoľujeme si Vás upozorniť,
        <br className="big" /> <b> že sa nejedná o&nbsp;profesionálnu aplikáciu,</b> <br className="big" />
        ale len o&nbsp;ilustračný doplnok k&nbsp;vysokoškolskej záverečnej práci. Pri riešení otázky správnosti vykonávania spracúvania
        osobných údajov v&nbsp;súlade s&nbsp;Nariadením GDPR kontaktujte, prosím, odborníka v&nbsp;tejto oblasti.
      </p>
      <Button variant="primary" onClick={handleClose}>
        Rozumiem, chcem vstúpiť.
      </Button>
    </>
  );

  return (
    <CustomModal
      show={show}
      handleClose={handleClose}
      title="Upozornenie"
      body={DisclaimerContent}
      allowCloseButton={false}
      centered={false}
      backdrop="static"
    />
  );
};
