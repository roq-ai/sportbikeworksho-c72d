import * as yup from 'yup';

export const serviceEngineerValidationSchema = yup.object().shape({
  experience: yup.number().integer().required(),
  specialization: yup.string().required(),
  availability: yup.string().required(),
  user_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
