import * as Yup from "yup";

//localization
import { t } from "i18next";
//regex password rules
const passwordRequrements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



export default Yup.object({

  //email
  email: Yup.string().email(`${t('validate_invalid_email')}`).required(`${t('validate_email')}`),

  //password
  password: Yup.string()
    .required(`${t('validate_password')}`)
    .matches(
      passwordRequrements,
      `${t('validate_invalid_password')}`

    ),
});
