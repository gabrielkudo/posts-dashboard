import yup from '@/lib/validations'

export type LoginInputData = {
  email: string
  password: string
}

export const LoginInputDataValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
})
