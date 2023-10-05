import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().required(),
  notes: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  bike_id: yup.string().nullable().required(),
});
