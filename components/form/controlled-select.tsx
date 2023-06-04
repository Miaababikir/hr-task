import React, { ReactElement } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}
interface Props extends SelectProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  icon?: ReactElement;
  errors?: FieldErrors;
}

const ControlledSelect = ({
  control,
  name,
  label,
  placeholder,
  options,
  errors,
  icon,
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
          <ChakraSelect
            id={name}
            {...rest}
            {...field}
            placeholder={placeholder}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ChakraSelect>
        )}
      />
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </FormControl>
  );
};

export default ControlledSelect;
