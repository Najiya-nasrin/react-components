import Modal from "../Components/Modal";
import { useState } from "react";
import Button from "../Components/Button";
import { text } from "../assets/dummyText";

export default function ModalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (action) => {
    console.log(action ? "DELETE" : "CANCEL");
    setModalOpen(false);
  };

  return (
    <div>
      {text}
      <Button primary onClick={openModal}>
        {" "}
        Open Modal{" "}
      </Button>
      {modalOpen && (
        <Modal
          onClose={() => closeModal(null)}
          actionBar={
            <>
              <Button outline success onClick={() => closeModal(false)}>
                {" "}
                CANCEL{" "}
              </Button>
              <Button danger onClick={() => closeModal(true)}>
                {" "}
                DELETE{" "}
              </Button>
            </>
          }
        >
          ARE YOU SURE YOU WANT TO DELETE?
        </Modal>
      )}
    </div>
  );
}
