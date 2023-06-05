import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().required().label("First name"),
  lastName: yup.string().required().label("Last name"),
  email: yup.string().email().required().label("Email"),
  address: yup.string().required().label("Address"),
  contacts: yup
    .array()
    .of(
      yup.object().shape({
        value: yup
          .number()
          .typeError("Must be valid number")
          .required()
          .label("Contact"),
      })
    )
    .required(),
  technicalKnowledge: yup
    .array()
    .of(
      yup.object().shape({
        value: yup
          .string()
          .typeError("Must be valid string")
          .required()
          .label("Technical knowledge"),
      })
    )
    .required(),
  workExperience: yup.array().of(
    yup.object().shape({
      company: yup.string().required().label("Company"),
      position: yup.string().required().label("Position"),
      startDate: yup.date().required().label("Start date"),
      endDate: yup.date().required().label("End date"),
      description: yup.string().required().label("Description"),
    })
  ),
});
