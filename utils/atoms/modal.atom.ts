import { ModalType } from "@/shared/enums/modal-type.enum";
import { atom } from "recoil";

export interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
  payload?: any;
}

const defaultState: ModalState = {
  isOpen: false,
  modalType: ModalType.RequestInformation,
};

export const modalState = atom<ModalState>({
  key: "modalState",
  default: defaultState,
});
