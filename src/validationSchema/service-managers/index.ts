import * as yup from 'yup';

export const serviceManagerValidationSchema = yup.object().shape({
  experience: yup.number().integer().required(),
  management_level: yup.string().required(),
  availability: yup.string().required(),
  user_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
