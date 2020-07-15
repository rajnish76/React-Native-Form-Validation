import * as yup from 'yup';

const Schema = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
  confirmPassword: yup
    .string()
    .required()
    .label('Confirm password')
    .test('passwords-match', 'Passwords must match ya fool', function (value) {
      return this.parent.password === value;
    }),
  agreeToTerms: yup
    .boolean()
    .label('Terms')
    .test(
      'is-true',
      'Must agree to terms to continue',
      (value) => value === true,
    ),
});

export default Schema;
