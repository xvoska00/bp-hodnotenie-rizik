import React from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { InfoSource } from './Popovers';

export const PMuted = ({ children }) => {
  return <p className="small text-muted font-italic mb-4">{children}</p>;
};

const DEFAULT_MUTED_TEXT =
  'Z nasledujúcich tvrdení vyberte tvrdenie, ktoré charakterizuje Vami realizované spracúvanie údajov čo najpresnejšie.';

export const QuestionnaireCard = ({ children, title, popover, mutedText = DEFAULT_MUTED_TEXT }) => {
  return (
    <Card className="shadow border-0 mb-5">
      <Card.Body className="p-5">
        <h2 className="h4 mb-1">
          {title}
          {popover && (
            <span className="float-right">
              <InfoSource popover={popover} />
            </span>
          )}
        </h2>
        <PMuted>{mutedText}</PMuted>
        <ListGroup as="ul">
          {React.Children.map(children, (child) => (
            <ListGroup.Item>{child}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const CardRadioButton = ({ id, value, radioGroupValue, popover, text, onChange, mutedText }) => (
  <Form.Check id={id} type="radio" custom>
    <div className="d-flex">
      <Form.Check.Input type="radio" value={value} checked={radioGroupValue === value} onChange={onChange} />
      <Form.Check.Label>{text}</Form.Check.Label>
      {popover && (
        <span className="ml-auto pl-1">
          <InfoSource popover={popover} />
        </span>
      )}
    </div>
    {mutedText && <Form.Text muted>{mutedText}</Form.Text>}
  </Form.Check>
);

export const CardCheckboxButton = ({ id, checked, popover, text, setChecked, mutedText }) => (
  <Form.Check id={id} type="checkbox" custom>
    <div className="d-flex">
      <Form.Check.Input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <Form.Check.Label>{text}</Form.Check.Label>
      {popover && (
        <span className="ml-auto pl-1">
          <InfoSource popover={popover} />
        </span>
      )}
    </div>
    {mutedText && <Form.Text muted>{mutedText}</Form.Text>}
  </Form.Check>
);
