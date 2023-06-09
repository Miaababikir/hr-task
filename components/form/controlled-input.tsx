import React, { ReactElement } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { resolveObject } from "@/shared/helpers/helpers";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: ReactElement;
  errors?: FieldErrors;
};

const ControlledInput = ({
  control,
  name,
  label,
  placeholder,
  errors,
  icon,
  ...rest
}: Props) => {
  const error = errors ? resolveObject(errors || {}, name) : null;

  return (
    <FormControl isInvalid={!!error?.message}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputGroup>
            {icon && <InputLeftElement>{icon}</InputLeftElement>}
            <ChakraInput
              id={name}
              {...rest}
              {...field}
              placeholder={placeholder}
            />
          </InputGroup>
        )}
      />
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </FormControl>
  );
};

export default ControlledInput;
