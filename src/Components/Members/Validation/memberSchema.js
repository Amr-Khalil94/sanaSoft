import * as Yup from "yup";

//translation
import { t } from "i18next";

export default Yup.object({
    name: Yup.string()
        .trim()
        .required(t('validate_name'))
        .matches(/^[a-zA-Z0-9]+$/, `${t('validate_name_invalid')}`),

    email: Yup.string()
        .trim()
        .required(t('validate_email')).email(t('validate_email')),

    type: Yup.string()
        .trim()
        .required(t('validate_type')),

    gender: Yup.string()
        .trim()
        .required(t('validate_gender')),

    address: Yup.string()
        .trim()
        .required(t('validate_address')),

    date: Yup.date().required(t('validate_date')),

    phoneNumber: Yup
        .number()
        .typeError(t('validate_phoneNumber'))
        .required(t('validate_phoneNumber')),









})