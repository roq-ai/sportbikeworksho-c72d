import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getServiceManagerById, updateServiceManagerById } from 'apiSdk/service-managers';
import { serviceManagerValidationSchema } from 'validationSchema/service-managers';
import { ServiceManagerInterface } from 'interfaces/service-manager';
import { UserInterface } from 'interfaces/user';
import { AppointmentInterface } from 'interfaces/appointment';
import { getUsers } from 'apiSdk/users';
import { getAppointments } from 'apiSdk/appointments';

function ServiceManagerEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<ServiceManagerInterface>(
    () => (id ? `/service-managers/${id}` : null),
    () => getServiceManagerById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: ServiceManagerInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateServiceManagerById(id, values);
      mutate(updated);
      resetForm();
      router.push('/service-managers');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<ServiceManagerInterface>({
    initialValues: data,
    validationSchema: serviceManagerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Service Managers',
              link: '/service-managers',
            },
            {
              label: 'Update Service Manager',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Service Manager
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Experience"
            formControlProps={{
              id: 'experience',
              isInvalid: !!formik.errors?.experience,
            }}
            name="experience"
            error={formik.errors?.experience}
            value={formik.values?.experience}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('experience', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.management_level}
            label={'Management Level'}
            props={{
              name: 'management_level',
              placeholder: 'Management Level',
              value: formik.values?.management_level,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.availability}
            label={'Availability'}
            props={{
              name: 'availability',
              placeholder: 'Availability',
              value: formik.values?.availability,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<AppointmentInterface>
            formik={formik}
            name={'appointment_id'}
            label={'Select Appointment'}
            placeholder={'Select Appointment'}
            fetcher={getAppointments}
            labelField={'status'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/service-managers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'service_manager',
    operation: AccessOperationEnum.UPDATE,
  }),
)(ServiceManagerEditPage);
