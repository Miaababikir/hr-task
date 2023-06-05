import React, { ReactElement, useRef } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { Simulate } from "react-dom/test-utils";
import { Icon } from "@chakra-ui/icon";
import { FiFile } from "react-icons/fi";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { resolveObject } from "@/shared/helpers/helpers";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: ReactElement;
  acceptedFileTypes: string;
  errors?: FieldErrors;
};
const ControlledFileUpload = ({
  control,
  name,
  label,
  placeholder,
  errors,
  icon,
  acceptedFileTypes,
  ...rest
}: Props) => {
  const inputRef = useRef();
  const error = errors ? resolveObject(errors || {}, name) : null;

  return (
    <FormControl isInvalid={!!error?.message} isRequired>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FiFile} />}
            />
            <input
              type="file"
              accept={acceptedFileTypes}
              {...field}
              name={name}
              ref={inputRef as any}
              style={{ display: "none" }}
            />
            {icon && <InputLeftElement>{icon}</InputLeftElement>}
            <Input
              placeholder={placeholder || "Choose file ..."}
              onClick={() => {
                if (!inputRef?.current) return;
                // @ts-ignore
                inputRef.current.click();
              }}
              value={field.value && field.value.replace("C:\\fakepath\\", "")}
            />
          </InputGroup>
        )}
      />
      {error && <FormErrorMessage>{error.message as string}</FormErrorMessage>}
    </FormControl>
  );
};

export default ControlledFileUpload;
