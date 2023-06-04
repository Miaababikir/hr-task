"use client";

import { User } from "@/shared/interfaces/user.interface";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/utils/atoms/modal.atom";

interface Props {
  data: User;
}
const DeleteUser = ({ data }: Props) => {
  const toast = useToast();

  const [_, setModalState] = useRecoilState(modalState);

  const handleDeleteUser = () => {
    toast({
      title: "User deleted",
      status: "success",
    });
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Box>
      <p>
        Are you sure about deleting{" "}
        <strong>{`${data.firstName} ${data.lastName}`}</strong> ?
      </p>
      <Flex justifyContent="end" mt={4}>
        <Button
          variant="light"
          onClick={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        >
          Cancel
        </Button>
        <Button
          ml={2}
          variant="danger"
          type="submit"
          onClick={handleDeleteUser}
        >
          Confirm
        </Button>
      </Flex>
    </Box>
  );
};

export default DeleteUser;
