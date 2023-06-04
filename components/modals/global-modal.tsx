"use client";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { modalState } from "@/utils/atoms/modal.atom";
import { useRecoilState } from "recoil";
import { ModalTitles } from "@/shared/constants/modal-titles";
import ModalFactory from "@/components/modals/modal-factory";

const GlobalModal = () => {
  const [state, setModalState] = useRecoilState(modalState);

  return (
    <Modal
      isOpen={state.isOpen}
      onClose={() => {
        setModalState({ ...state, isOpen: false });
      }}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ModalTitles[state.modalType]}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalFactory modalType={state.modalType} data={state.payload} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GlobalModal;
