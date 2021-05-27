import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Modal.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Divider } from './Divider';

const times = <FontAwesomeIcon icon={faTimes} />;

export const CustomModal = ({ title, body, show, handleClose, allowCloseButton = true, centered = true, backdrop = true }) => {
  return (
    <Modal
      className="custom-modal"
      contentClassName="rounded075"
      show={show}
      onHide={handleClose}
      size="xl"
      centered={centered}
      backdrop={backdrop}
      restoreFocus={false}
    >
      {allowCloseButton && (
        <button className="close" onClick={handleClose}>
          {times}
        </button>
      )}

      <Modal.Body className="text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {title && (
                <>
                  <h2 className="title text-color-dark text-uppercase mb-0">{title}</h2>
                  <Divider variant="dark" />
                </>
              )}
              {body}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
