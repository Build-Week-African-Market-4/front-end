import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
    password: Yup
        .string()
        .trim()
        .required('Password is required'),
})

export default formSchema;