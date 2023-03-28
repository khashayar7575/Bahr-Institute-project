import * as Yup from 'yup'

const fullNameValidation = Yup.string()
  .required('پر کردن این فیلد الزامیست !')
  .matches(
    /^([\u0600-\u06FF\s]*|[a-zA-Z\s]*)$/,
    'نام و نام خانوادگی باید فقط با حروف فارسی یا انگلیسی وارد شود !'
  )
  .min(3, 'نام و نام خانوادگی باید حداقل دارای 3 کاراکتر باشد !')
  .max(30, 'نام و نام خانوادگی باید حداکثر دارای 30 کاراکتر باشد !')

const emailValidation = Yup.string()
  .email('لطفا یک پست الکترونیکی معتبر وارد کنید !')
  .required('پر کردن این فیلد الزامیست !')

const nationalIdValidation = Yup.string()
  .required('پر کردن این فیلد الزامیست !')
  .matches(/^[1-9]\d{9}$/, 'لطفا یک کد ملی معتبر وارد کنید')

const phoneNumberValidation = Yup.string()
  .required('پر کردن این فیلد الزامیست !')
  .matches(
    /^(98)9(0[1-5]|[1 3]\d|2[0-2]|98|90)\d{7}$/,
    'لطفا یک شماره موبایل معتبر کشور ایران را وارد کنید !'
  )

const passwordValidation = Yup.string()
  .required('پر کردن این فیلد الزامیست !')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
    'رمز عبور باید بین ۸ تا ۳۲ حرف و ترکیبی از اعداد، حروف انگلیسی، علائم اشاره و حداقل یک حرف کپیتال باشد !'
  )

const passwordConfirmation = Yup.string()
  .required('پر کردن این فیلد الزامیست !')
  .oneOf([Yup.ref('password'), null], 'رمز عبور با تکرار آن مطابقت ندارد !')

const birthDateValidation = Yup.string().required('پر کردن این فیلد الزامیست !')

const textContent = Yup.string().required('پر کردن این فیلد الزامیست !')

const profileImageValidation = Yup.string().required('پر کردن این فیلد الزامیست !')

const addressValidation = Yup.string().required('پر کردن این فیلد الزامیست !')

export const loginFormValidation = Yup.object({
  email: Yup.string()
    .email('لطفا یک پست الکترونیکی معتبر وارد کنید !')
    .required('لطفا پست الکترونیکی خود را وارد نمایید !'),
  password: Yup.string().required('لطفا رمز عبور خود را وارد نمایید !'),
})

export const registerFormValidation = Yup.object({
  fullName: fullNameValidation,
  email: emailValidation,
  nationalId: nationalIdValidation,
  phoneNumber: phoneNumberValidation,
  password: passwordValidation,
  passwordConfirmation: passwordConfirmation,
  birthDate: birthDateValidation,
  codeValidation: Yup.string().required('کد تایید نامعتبر است !'),
})

export const forgotPasswordFormValidation = Yup.object({
  email: emailValidation,
})

export const resetPasswordFormValidation = Yup.object({
  password: passwordValidation,
  passwordConfirmation,
})

export const editProfileFormValidation = Yup.object({
  fullName: fullNameValidation,
  phoneNumber: phoneNumberValidation,
  birthDate: birthDateValidation,
  profile: profileImageValidation,
  nationalId: nationalIdValidation,
  email: emailValidation,
})

export const contactFormValidation = Yup.object({
  email: emailValidation,
  textContent: textContent,
})

export const ticketFormValidation = Yup.object({
  title: Yup.string().required('ثبت عنوان تیکت الزامیست !'),
  text: textContent,
})

export const sendCommentFormValidation = Yup.object({
  sendComment: textContent,
})

export const answerCommentFormValidation = Yup.object({
  answerComment: textContent,
})

export const resumesFormValidation = Yup.object({
  fullName: fullNameValidation,
  email: emailValidation,
  phoneNumber: phoneNumberValidation,
  resumes: textContent,
})

export const registerEmployeeValidation = Yup.object({
  fullName: fullNameValidation,
  email: emailValidation,
  nationalId: nationalIdValidation,
  phoneNumber: phoneNumberValidation,
  password: passwordValidation,
  passwordConfirmation: passwordConfirmation,
  address: addressValidation,
  birthDate: birthDateValidation,
  codeValidation: Yup.string().required('کد تایید نامعتبر است !'),
})
