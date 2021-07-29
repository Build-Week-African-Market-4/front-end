import * as yup from 'yup';

export default yup.object().shape({
    // username: Yup
    //     .string()
    //     .trim()
    //     .required('Username is required')
    //     .min(3, 'Username must be at least 3 characters long'),
    // password: Yup
    //     .string()
    //     .trim()
    //     .required('Password is required'),
    image:yup.string()
        .required('Image URL required'),
    title:yup.string()
        .required('Title required'),
    price:yup.string()
        .required('Price required'),
})


// export default formSchema;