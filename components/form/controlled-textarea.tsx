import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";

type Props = TextareaProps & {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  errors?: FieldErrors;
};

const ControlledTextarea = ({
  control,
  name,
  label,
  placeholder,
  errors,
  ...rest
}: Props) => {
  const error = (errors ?? {})[name];

  return (
    <FormControl isInvalid={!!error?.message}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ChakraTextarea
            id={name}
            {...rest}
            {...field}
            placeholder={placeholder}
          />
        )}
      />
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </FormControl>
  );
};

export default ControlledTextarea;
