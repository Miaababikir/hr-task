"use client";
import {
  Box,
  Grid,
  Text,
  Heading,
  GridItem,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import ControlledInput from "@/components/form/controlled-input";
import { FiPlus } from "react-icons/fi";
import ControlledSelect from "@/components/form/controlled-select";
import { educationLevels } from "@/shared/constants/select-options";
import { users } from "@/utils/data/users";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextarea from "@/components/form/controlled-textarea";
import { format } from "date-fns";
import schema from "./schema";
import { FormFields } from "@/app/(candidates)/profile/types";
import ControlledFileUpload from "@/components/form/controlled-file-upload";

const user = users[4];
const Profile = () => {
  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.profile?.address,
      contacts: user.profile?.contacts?.map((contact) => ({ value: contact })),
      educationLevel: user.profile?.educationLevel,
      workExperience: user.profile?.workExperience?.map((item) => ({
        ...item,
        startDate: format(item.startDate, "yyyy-MM-dd"),
        endDate: format(item.endDate, "yyyy-MM-dd"),
      })),
      technicalKnowledge: user.profile?.technicalKnowledge?.map((item) => ({
        value: item,
      })),
      cv: "",
    },
  });

  const { fields: contactFields, append: appendContact } = useFieldArray({
    control,
    name: "contacts",
  });

  const { fields: workExperienceFields, append: appendWorkExperience } =
    useFieldArray({
      control,
      name: "workExperience",
    });

  const { fields: technicalKnowledgeFields, append: appendTechnicalKnowledge } =
    useFieldArray({
      control,
      name: "technicalKnowledge",
    });

  const handleProfileUpdate = () => {
    toast({
      title: "Profile updated",
      status: "success",
    });
  };

  return (
    <Box bg="white" p={4} rounded="sm" shadow="md">
      <Heading as="h2" fontSize="3xl">
        Edit profile
      </Heading>
      <form onSubmit={handleSubmit(handleProfileUpdate)}>
        <Grid
          templateColumns="2fr 3fr"
          py={10}
          borderBottom="1px"
          borderColor="gray.200"
          gap={4}
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Personal Information
            </Text>
            <Text fontSize="sm" fontWeight="light">
              This information will be displayed publicly so be careful what you
              share.
            </Text>
          </Box>
          <Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <ControlledInput
                  name="firstName"
                  control={control}
                  errors={errors}
                  label="First name"
                />
              </GridItem>
              <GridItem>
                <ControlledInput
                  name="lastName"
                  control={control}
                  errors={errors}
                  label="Last name"
                />
              </GridItem>
              <GridItem>
                <ControlledInput
                  name="email"
                  control={control}
                  errors={errors}
                  type="email"
                  label="Email"
                />
              </GridItem>
              <GridItem>
                <ControlledInput
                  name="address"
                  control={control}
                  errors={errors}
                  label="Address"
                />
              </GridItem>
              <GridItem>
                <ControlledSelect
                  name="educationLevel"
                  control={control}
                  errors={errors}
                  label="Education Level"
                  options={Object.values(educationLevels)}
                />
              </GridItem>
            </Grid>
          </Box>
        </Grid>
        <Grid
          templateColumns="2fr 3fr"
          py={10}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Contact
            </Text>
            <Text fontSize="sm" fontWeight="light">
              Please make sure that you provide us with valid information
            </Text>
          </Box>
          <Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {contactFields.map((field, index) => (
                <GridItem>
                  <ControlledInput
                    key={index}
                    name={`contacts.${index}.value`}
                    control={control}
                    errors={errors}
                    type="number"
                  />
                </GridItem>
              ))}
              <GridItem display="flex" flexDirection="column">
                <Box mt="auto">
                  <Button
                    variant="light"
                    fontWeight="light"
                    border="1px"
                    borderColor="gray.200"
                    size="xs"
                    onClick={() => {
                      appendContact({ value: 971 });
                    }}
                  >
                    <FiPlus />
                    <Text as="span" ml={1}>
                      New contact
                    </Text>
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Grid>
        <Grid
          templateColumns="2fr 3fr"
          py={10}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Work experience
            </Text>
            <Text fontSize="sm" fontWeight="light">
              Please make sure that you provide us with valid information
            </Text>
          </Box>
          <Box>
            <Box>
              {workExperienceFields.map((field, index) => (
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  gap={2}
                  mb={6}
                  pb={6}
                  borderBottom="1px"
                  borderColor="gray.200"
                >
                  <GridItem colSpan={2}>
                    <Text fontWeight="bold">Work experience #{index + 1}</Text>
                  </GridItem>
                  <GridItem>
                    <ControlledInput
                      key={index}
                      label="Company"
                      name={`workExperience.${index}.company`}
                      control={control}
                      errors={errors}
                      type="text"
                    />
                  </GridItem>
                  <GridItem>
                    <ControlledInput
                      key={index}
                      label="Position"
                      name={`workExperience.${index}.position`}
                      control={control}
                      errors={errors}
                      type="text"
                    />
                  </GridItem>
                  <GridItem>
                    <ControlledInput
                      key={index}
                      label="Start date"
                      name={`workExperience.${index}.startDate`}
                      control={control}
                      errors={errors}
                      type="date"
                    />
                  </GridItem>
                  <GridItem>
                    <ControlledInput
                      key={index}
                      label="End date"
                      name={`workExperience.${index}.endDate`}
                      control={control}
                      errors={errors}
                      type="date"
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <ControlledTextarea
                      key={index}
                      label="Descirption"
                      name={`workExperience.${index}.description`}
                      control={control}
                      errors={errors}
                    />
                  </GridItem>
                </Grid>
              ))}
              <GridItem display="flex" flexDirection="column">
                <Box mt="auto">
                  <Button
                    variant="light"
                    fontWeight="light"
                    border="1px"
                    borderColor="gray.200"
                    size="xs"
                    onClick={() => {
                      appendWorkExperience({});
                    }}
                  >
                    <FiPlus />
                    <Text as="span" ml={1}>
                      New work experience
                    </Text>
                  </Button>
                </Box>
              </GridItem>
            </Box>
          </Box>
        </Grid>
        <Grid
          templateColumns="2fr 3fr"
          py={10}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Technical knowledge
            </Text>
            <Text fontSize="sm" fontWeight="light">
              Please make sure that you provide us with valid information
            </Text>
          </Box>
          <Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              {technicalKnowledgeFields.map((field, index) => (
                <GridItem>
                  <ControlledInput
                    key={index}
                    name={`technicalKnowledge.${index}.value`}
                    control={control}
                    errors={errors}
                  />
                </GridItem>
              ))}
              <GridItem display="flex" flexDirection="column">
                <Box mt="auto">
                  <Button
                    variant="light"
                    fontWeight="light"
                    border="1px"
                    borderColor="gray.200"
                    size="xs"
                    onClick={() => {
                      appendTechnicalKnowledge({ value: "" });
                    }}
                  >
                    <FiPlus />
                    <Text as="span" ml={1}>
                      New Technical knowledge
                    </Text>
                  </Button>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Grid>
        <Grid
          templateColumns="2fr 3fr"
          py={10}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Resume
            </Text>
            <Text fontSize="sm" fontWeight="light">
              Please provide us with your updated resume
            </Text>
          </Box>
          <Box>
            <ControlledFileUpload
              name="cv"
              control={control}
              errors={errors}
              acceptedFileTypes="application/pdf"
              type="file"
            />
          </Box>
        </Grid>
        <Flex justifyContent="end" mt={4}>
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Profile;
