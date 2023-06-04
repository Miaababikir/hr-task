"use client";
import React, { ReactNode } from "react";
import { ModalType } from "@/shared/enums/modal-type.enum";
import { Box, ButtonProps } from "@chakra-ui/react";
import { modalState } from "@/utils/atoms/modal.atom";
import { useRecoilState } from "recoil";
import { MenuItemProps } from "@chakra-ui/menu/dist/menu-item";

interface Props extends ButtonProps, MenuItemProps {
  modalType: ModalType;
  payload?: any;
  children: ReactNode;
}
const ToggleModal = ({ modalType, payload, children, ...rest }: Props) => {
  const [_, setModalState] = useRecoilState(modalState);

  const openModal = () => {
    setModalState({
      isOpen: true,
      modalType,
      payload,
    });
  };

  return (
    <Box {...rest} onClick={openModal}>
      {children}
    </Box>
  );
};

export default ToggleModal;
