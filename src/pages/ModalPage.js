import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  }
  const acceptButton = <div><Button onClick={handleClose} primary>Accept</Button></div>
  const modal = <Modal onClose={handleClose} acceptButton={acceptButton}><p>Here is the Important Agreement that you need to Accept!</p></Modal>
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
export default ModalPage;
