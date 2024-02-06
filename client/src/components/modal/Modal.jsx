import { createPortal } from 'react-dom';
import { StyledModal } from './styles';

const Modal = ({ closeModal, children, withButtonClose = true }) => {
	if (!children) return;

	return createPortal(
		<StyledModal>
			{children}
			{withButtonClose && <button onClick={closeModal}>Close</button>}
		</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
