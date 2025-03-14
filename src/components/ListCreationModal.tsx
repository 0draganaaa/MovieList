import { FunctionComponent } from "react";
import { Modal, CloseButton } from "react-bootstrap";
import { ListCreationForm } from "./ListCreationForm";

export const ListCreationModal: FunctionComponent<{
  modalOpened: boolean;
  closeModal: () => void;
}> = ({ modalOpened, closeModal }) => {

  return (
      <Modal
        show={modalOpened}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="button-container">
          <CloseButton onClick={closeModal} />
        </div>
        <Modal.Header className="header pt-0">
          <div className="fs-1 text-center w-100">Create your custom list</div>
        </Modal.Header>
        <Modal.Body className="content">
          <ListCreationForm closeModal={closeModal} />
        </Modal.Body>
      </Modal>
  );
};
