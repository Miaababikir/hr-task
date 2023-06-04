"use client";
import { User } from "@/shared/interfaces/user.interface";
import { useForm } from "react-hook-form";
import { Box, Button, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import ControlledInput from "@/components/form/controlled-input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { modalState } from "@/utils/atoms/modal.atom";

interface Props {
  data: User;
}

const schema = yup.object().shape({
  password: yup.string().required(),
  passwordConfirmation: yup.string().required(),
});
const ChangePassword = ({ data }: Props) => {
  const toast = useToast();

  const [_, setModalState] = useRecoilState(modalState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChangePassword = () => {
    toast({
      title: "Password changed",
      status: "success",
    });
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Box>
      <p>
        You are changing the password for <strong>{data.firstName}</strong>
      </p>
      <Box mt={2}>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <SimpleGrid columns={2} spacing={2}>
            <ControlledInput
              name="password"
              control={control}
              errors={errors}
              type="password"
              placeholder="Password"
            />
            <ControlledInput
              name="passwordConfirmation"
              control={control}
              errors={errors}
              type="password"
              placeholder="Confirm password"
            />
          </SimpleGrid>

          <Flex justifyContent="end" mt={4}>
            <Button
              variant="light"
              onClick={() =>
                setModalState((prev) => ({ ...prev, isOpen: false }))
              }
            >
              Cancel
            </Button>
            <Button ml={2} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default ChangePassword;
