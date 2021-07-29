import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup
        .string()
        .trim()
        .required('Product title is required')
        .min(3, 'Name must be at least 3 characters long'),
    image: Yup
        .string(),
    description: Yup
        .string()
        .trim()
        .required('Description is required'),
    price: Yup
        .number()
        .required('Price is required'),
    location: Yup
        .string()
        .oneOf([
            'Burundi', 'Comoros', 'Djibouti', 'Ethiopia', 'Eritrea', 'Kenya', 'Madagascar',
            'Malawi', 'Mauritius', 'Mozambique', 'Réunion', 'Rwanda', 'Seychelles', 'Somalia',
            'Somaliland', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe'
        ], 'Location is required'),
})

export default schema;
