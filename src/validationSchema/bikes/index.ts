import * as yup from 'yup';

export const bikeValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().required(),
  vin_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
