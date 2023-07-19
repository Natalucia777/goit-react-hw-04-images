import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    width: '1000px',
    border: 'none',
    backgroundColor: 'transparent',
    inset: 'auto',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const ModalImg = ({ image, closeModal, isModalOpen }) => {
  return (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterOpen={() => disableBodyScroll(document)}
        onAfterClose={() => enableBodyScroll(document)} >
        <img src={image.largeImageURL} alt={image.tags} loading="lazy" />
    </Modal>
  );
};

ModalImg.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};