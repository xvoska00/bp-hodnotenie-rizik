import { useState, useEffect } from 'react';

import { scroller, animateScroll } from 'react-scroll';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Pojmy } from './Pojmy';

import './Navbar.css';

// Heigth of the navbar is the offset.
const offset = 104;

const NavLink = ({ title, sectionName, onClick }) => {
  const onClickHere = (ev) => {
    ev.preventDefault();
    ev.currentTarget.blur();
    onClick(sectionName);
  };

  return (
    <Nav.Link href={`#${sectionName}`} className="py-3 px-0 px-lg-3 mx-lg-1 rounded-lg" onClick={onClickHere}>
      {title}
    </Nav.Link>
  );
};

export const NavBar = () => {
  const [activeSection, setSection] = useState(null);

  // Scrollspy - hacks.
  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + Math.round(window.scrollY) + 1 >= document.body.offsetHeight) {
        // Make the last section active when we reach the bottom of the page.
        setSection('#kontakt');
        return;
      }
      const sections = ['uvod', 'gdpr', 'zasady', 'hodnotenie', 'kontakt'];
      for (const section of sections) {
        const rect = document.getElementById(section).getBoundingClientRect();
        const scrollTop = rect.top - offset <= 0;
        const scrollBottom = rect.bottom - offset >= 0;
        if (scrollTop && scrollBottom) {
          setSection(`#${section}`);
          return;
        }
      }
      setSection(null);
    };
  }, []);
  // Scrollspy - hacks end.

  const scrollOptions = {
    smooth: 'easeInOutQuint',
    offset: -offset + 2,
    duration: 1000,
  };

  const onClick = (sectionName) => {
    scroller.scrollTo(sectionName, scrollOptions);
  };

  const onClickHome = (ev) => {
    //ev.preventDefault();
    animateScroll.scrollToTop(scrollOptions);
  };

  return (
    <Navbar
      id="mainNav"
      bg="secondary"
      expand="lg"
      fixed="top"
      className="text-uppercase"
      sticky="top"
      variant="dark"
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Brand href="#" onClick={onClickHome}>
          Domov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={activeSection}>
            <NavLink title="Úvod" sectionName="uvod" onClick={onClick} />
            <NavLink title="GDPR" sectionName="gdpr" onClick={onClick} />
            <NavLink title="Zásady" sectionName="zasady" onClick={onClick} />
            <NavLink title="Hodnotenie rizík" sectionName="hodnotenie" onClick={onClick} />
            <NavLink title="Kontakt" sectionName="kontakt" onClick={onClick} />
            <Pojmy />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
