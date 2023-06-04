import { Box, Button, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/utils/atoms/modal.atom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "@/components/form/controlled-input";
import * as yup from "yup";
import { User } from "@/shared/interfaces/user.interface";
import ControlledTextarea from "@/components/form/controlled-textarea";

interface Props {
  data: User;
}

const schema = yup.object().shape({
  content: yup.string().required(),
});
const RequestInformation = ({ data }: Props) => {
  const toast = useToast();

  const [_, setModalState] = useRecoilState(modalState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRequestInformation = () => {
    toast({
      title: "Information requested",
      status: "success",
    });
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Box mt={-2}>
      <p>
        You are about to request more information from{" "}
        <strong>{data.firstName}</strong>
      </p>
      <Box mt={2}>
        <form onSubmit={handleSubmit(handleRequestInformation)}>
          <Box>
            <ControlledTextarea
              name="content"
              control={control}
              errors={errors}
              placeholder="What information you need to request?"
            />
          </Box>

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

export default RequestInformation;
