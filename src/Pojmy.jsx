import { useState } from 'react';
import { CustomModal } from './Modal';

const CONTENT = (
  <ul className="text-justify">
    <li>
      <p>
        <b>Spracúvanie osobných údajov</b> je akákoľvek operácia alebo súbor operácií s&nbsp;osobnými údajmi alebo súbormi osobných údajov.
        Možno sem zaradiť činnosti ako získavanie, zaznamenávanie, usporadúvanie, štruktúrovanie, uchovávanie, prepracovanie alebo zmena,
        vyhľadávanie, prehliadanie, využívanie, poskytovanie prenosom, šírením alebo poskytovanie iným spôsobom, preskupovanie alebo
        kombinovanie, obmedzenie, vymazanie alebo likvidácia, bez ohľadu na to, akou formou a&nbsp;s&nbsp;využitím akých prostriedkov sú
        tieto činnosti realizované.
      </p>
    </li>
    <li>
      <p>
        Za <b>osobný údaj</b> sa považujú akékoľvek informácie týkajúce sa identifikovanej alebo identifikovateľnej fyzickej osoby
        (tzv.&thinsp;
        <i>
          <b>&bdquo;dotknutej osoby&ldquo;</b>
        </i>
        ), na základe ktorých túto osobu možno priamo či nepriamo <b>identifikovať</b>. Osobnými údajmi sú napríklad meno a&nbsp;priezvisko,
        druh a&nbsp;adresa pobytu, dátum narodenia, rodné číslo, konktaktné údaje podpis, ale aj lokalizačné údaje či online identifikátor.
        Za osobný údaj sa teda považuje každý údaj, ktorý je špecifický pre fyzickú, fyziologickú, genetickú, mentálnu, ekonomickú, kultúrnu
        alebo sociálnu identitu tejto fyzickej osoby.
      </p>
    </li>
    <li>
      <p>
        <b>Prevádzkovateľ</b> je osoba, ktorá <b>určí účel a&nbsp;prostriedky spracúvania</b> osobných údajov Prevádzkovateľom môže byť
        fyzická alebo právnická osoba, orgán verejnej moci, agentúra alebo iný subjekt. Prevádzkovateľ <b>nesie zodpovednosť</b> za
        vykonávanie spracúvania v&nbsp;súlade s&nbsp;Nariadením GDPR.
      </p>
    </li>
    <li>
      <p>
        <b>Sprostredkovateľ</b> je osoba, ktorá spracúva osobné údaje v&nbsp;mene prevádzkovateľa, na základe jeho poverenia. Medzi
        prevádzkovateľom a sprostredkovateľom spracúvania musí byť v&nbsp;súlade s&nbsp;legislatívou GDPR uzatvorená zmluva, na základe
        ktorej pripadajú sprostredkovateľovi konkrétne povinnosti.
      </p>
    </li>
    <li>
      <p>
        Nariadenie GDPR umožňuje alternatívu, kedy jedno spracúvanie realizujú tzv.&thinsp;<b>spoloční prevádzkovatelia</b>. Ide
        o&nbsp;prípad, kedy účel a&nbsp;prostriedky spracúvania stanovia spoločne dvaja alebo viacerí prevádzkovatelia, ktorí si medzi sebou
        transparentným ujednaním (voči spracúvaniu) vymedzia svoje podiely na zodpovednosti za plnenie poviností.
      </p>
    </li>
    <li>
      <p>
        <b>Dotknutá osoba</b> je subjekt, ktorého osobné údaje sa spracúvajú. Za dotknutú osobu považujeme akúkoľvek fyzickú osobu, fyzickú
        osobu podnikateľov, fyzickú osobu vystupujúcu v mene spoločnosti ako jej zamestnanec alebo fyzickú osobu vystupujúcu za spoločnosť
        ako člen štatutárneho orgánu, ktorej osobné údaje sú zhromažďované v&nbsp;rámci vykonávania istej spracovateľskej činnosti. Dotknutú
        osobu možno označiť taktiež pojmom <b>&bdquo;subjekt údajov&ldquo;</b>.
      </p>
    </li>
    <li>
      <p>
        <b>Účel spracúvania</b> je zásadným prvkov v&nbsp;kontexte celej právnej úpravy ochrany osobných údajov. Voči účelu, ktorý správca
        pred zahájením spracúvania určil, sa následne hodnotí, akým spôsobom je potrebné zaistiť legálny priebeh spracúvania (viz{' '}
        <b>
          <i>&bdquo;zákonný titul&ldquo;</i>
        </b>
        ), ako dlho môžu byť údaje uchovávané, kto k nim môže mať prístup apod.
      </p>
    </li>
    <li>
      <p>
        <b>Zásady spracúvania</b> predstavujú základný stavebný prvok každého vykonávaného spracúvania. Ide o&nbsp;súhrn niekoľkých
        aspektov, ktoré musí prevádzkovateľ spracúvania nevyhnutne dodržiavať. Konkrétne zásady sú jednotlivo rozvinuté v&nbsp;článku&nbsp;5
        odst.&nbsp;1 Nariadenia GDPR. Dodržiavanie týchto zásad je pre prevádzkovateľa zásadné, nielen z&nbsp;dôvodu plnenia povinností,
        ktoré mu pripisuje Nariadenia GDPR, ale taktiež z&nbsp;dôvodu uplatnenia zodpovednosti prevádzkovateľa za dodržiavanie týchto zásad
        stanovenej{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          v&nbsp;článku&nbsp;5 odst.&thinsp;2 Nariadenia GDPR
        </a>
        .
      </p>
    </li>
    <li>
      <p>
        Vykonávanie spracúvania musí byť podložené tzv.&nbsp;
        <b>zákonným titulom</b> spracúvania osobných údajov. Pod týmto označením možno rozumieť dôvod, na základe ktorého získava
        prevádzkovateľ <b>oprávnenie osobné údaje spracúvať</b>. Zákonný titul je preto nevyhnutným predpokladom k&nbsp;tomu, aby
        spracúvanie mohlo byť označené za legálne. Základným podnetom pre realizáciu legálneho spracúvania je vyjadrenie súhlasu dotknutej
        osoby s&nbsp;vykonávaním daného spracúvania, no taktiež existuje pre vymedzenie zákonného titulu aj niekoľko ďalších spôsobov, ktoré
        Nariadenie GDPR explicitne vymedzuje.
      </p>
    </li>
    <li>
      <p>
        <b>Súhlas dotknutej osoby</b> predstavuje slobodne daný, konkrétny, informovaný a jednoznačný prejav vôle dotknutej osoby, ktorým
        vyjadruje súhlas so spracúvaním osobných údajov, ktoré sa jej týkajú. Vyjadrený súhlas je možné odvolať. Prejav vôle v podobe
        vyjadrenia súhlasu je základnou zákonnou podmienkou pre realizáciu spracúvania osobných údajov. Existuje však niekoľko výnimiek
        definovaných{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          článkom&nbsp;6 odst.&thinsp;1 písm.&nbsp;b)&thinsp;&ndash;&thinsp;f) Nariadenia GDPR
        </a>
        , na základe ktorých možno vykonávať spracúvanie aj bez nutnosti získania súhlasu fyzickej osoby s týmto spracúvaním.
      </p>
    </li>
    <li>
      <p>
        <b>Práva dotknutých osôb</b> majú v systéme ochrany osobných údajov zásadné postavenie, pretože umožňujú dotknutým osobám vykonávať
        určitú mieru kontroly nad spracúvaním ich osobných údajov v&nbsp;celom jeho priebehu. Dotknuté osoby sa môžu voči prevádzkovateľom
        dovolávať týchto práv, ktoré im Nariadenie GDPR garantuje, a&nbsp;tí majú následne odpovedajúcu povinnosť konať takým spôsobom, aby
        boli práva dotknutých osôb dodržané. Práva dotknutých osôb sú formulované{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          v článkoch&nbsp;12&thinsp;&ndash;&thinsp;22 Nariadenia GDPR
        </a>
        .
      </p>
    </li>

    <li>
      <p>
        <b>Riziko</b> vo všeobecnosti odkazuje na predpoklad vzniku neočakávanej udalosti, ktorá bude mať vplyv na pôvodne zamýšľaný priebeh
        uskutočňovaných činností. V konktexte ochrany osobných údajov možno hovoriť o&nbsp;<b>&bdquo;rizikovom spracúvaní údajov&ldquo;</b>,
        v&nbsp;ktorom sa neočakávaná riziková udalosť prejaví v neschopnosti dodržať hlavné zásady Nariadenia GDPR s cieľom primárne
        zabezpečiť ochranu práv a&nbsp;slobôd dotknutých osôb.
      </p>
    </li>

    <li>
      <p>
        <b>Hodnotenie rizík</b> je proces založený na systematickom a&nbsp;neustálom monitorovaní možných rizík, ich následnej analýze
        a&nbsp;hodnotení. Tento proces umožňuje adekvátne reagovať na potenciálne hrozby v&nbsp;rámci vykonávania určitých činností prijatím
        vhodných opatrení, ktoré umožnia riziko minimalizovať, ideálne až eliminovať v celom jeho rozsahu.
      </p>
    </li>

    <li>
      <p>
        <b>Posúdenie vplyvu na ochranu údajov</b>, z&nbsp;angl. skrátene <i>DPIA</i>, predstavuje komplexný proces hodnotenia rizík, ku
        ktorému je na základe{' '}
        <a href="https://eur-lex.europa.eu/legal-content/SK/TXT/HTML/?uri=CELEX:32016R0679&from=sk#d1e1883-1-1">
          článku&nbsp;35 Nariadenia GDPR
        </a>{' '}
        prevádzkovateľ povinný pristúpiť v prípade, kedy spracúvanie pravdepodobne povedie k&nbsp;
        <b>
          <i>vysokému riziku pre práva a slobody</i>
        </b>{' '}
        dotknutých osôb.
      </p>
    </li>
    <li>
      <p>
        Prevádzkovateľ a&nbsp;sprostredkovateľ sú povinní <b>viesť záznamy o&nbsp;vykonávaných činnostiach spracúvania</b>. Tieto záznamy
        následne slúžia ako prostriedok umožňujúci preukázanie dodržiavania súladu vykonávaného spracúvania osobných údajov
        s&nbsp;Nariadením GDPR.
      </p>
    </li>
  </ul>
);

export const Pojmy = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <a href="#pojmy" className="py-3 px-0 px-lg-3 mx-lg-1 rounded-lg nav-link" onClick={handleShow}>
        Pojmy
      </a>
      <CustomModal show={show} handleClose={handleClose} title={'POJMY A DEFINÍCIE'} body={CONTENT} />
    </>
  );
};
