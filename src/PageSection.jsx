import { Divider } from './Divider';
import './PageSection.css';

export const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`page-section py-5 ${className}`}>
      {children}
    </section>
  );
};

export const SectionHeading = ({ text, className, dividerStyle = 'light' }) => {
  return (
    <>
      <h2 className={`page-section-heading text-center text-uppercase mb-0 ${className}`}>{text}</h2>
      <Divider variant={dividerStyle}></Divider>
    </>
  );
};
