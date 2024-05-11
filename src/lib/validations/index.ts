import * as yup from 'yup'

yup.setLocale({
  mixed: {
    default: 'Invalid field',
    required: ({ path }) => `The "${path}" is required`,
  },
  string: {
    email: () => 'Invalid email',
    min: ({ min, path }) => `The "${path}" must contain at least ${min} characters`,
  },
})

export default yup
