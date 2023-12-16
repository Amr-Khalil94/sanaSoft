import i18next from "i18next";
import { initReactI18next } from "react-i18next";


//tranlste
import "../Localization/index"

import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: "ar",
        resources: {
            en: {
                translation: {
                    logOut: 'Logout',

                    //login form 
                    signIn: 'Sign in',
                    email: 'Email Address',
                    password: 'Password',

                    //header
                    tableHeader: 'Members',
                    addMember: 'Add Member',
                    editMember: 'Edit Member',
                    viewMemberHeader: 'View Member',

                    //login validation
                    validate_password: 'please enter a valid password',
                    validate_invalid_password: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
                    validate_invalid_email: 'please enter a valid email address',

                    //member
                    addMemberBtt: 'Create a new member',
                    viewMember: 'View Member',
                    memberName: 'Name',
                    memberEmail: 'E-mail',
                    memberAction: 'Actions',
                    memberType: 'Member Type',
                    memberSubscripe: 'Subsribe',
                    memberGender: 'Gender',
                    memberAddress: 'Address',
                    memberDate: 'date',
                    memberPhone: 'Phone number',
                    memberImage: 'Image',
                    editMemberData: "Edit Member Information",
                    submit: 'Submit',

                    //add edit member validation
                    validate_name: 'Please enter a valid name',
                    validate_name_invalid: "Alphanumeric characters only",
                    validate_email: 'Please enter a valid email address',
                    validate_type: 'Please enter a valid type',
                    validate_subscription: 'Please enter a valid subscription',
                    validate_gender: 'Please enter a valid gender',
                    validate_address: 'Please enter a valid address',
                    validate_date: 'Please enter a valid date',
                    validate_phoneNumber: 'Please enter a valid phone number',
                    validate_image: 'Please enter a valid image',
                    validate_image_size: 'File is too large. Maximum size is 5MB',

                    //popUp 
                    popUp_title: 'Are you sure you want to delete this member?',
                    popUp_cancel_btt: 'Cancel',
                    popUp_delete_btt: 'Delete',


                }
            },
            ar: {
                translation: {
                    logOut: 'Cerrar sesión',

                    //login form
                    signIn: 'iniciar la sesión',
                    email: 'Correo electrónico',
                    password: 'contraseña',

                    //header
                    tableHeader: 'Miembros',
                    addMember: 'Agregar un miembro',
                    editMember: 'Editar miembro',
                    viewMemberHeader: 'Detalles del miembro',

                    //login validation
                    validate_password: 'Por favor ingrese la contraseña correcta',
                    validate_invalid_password: 'Debe contener 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter de mayúscula especial.',
                    validate_invalid_email: 'Por favor, introduce una dirección de correo electrónico válida',

                    //member
                    addMemberBtt: 'Crear un nuevo miembro',
                    viewMember: 'Información de miembro',
                    memberName: 'el nombre',
                    memberEmail: 'Correo electrónico',
                    memberAction: 'Comportamiento',
                    memberType: 'Tipo de membresía',
                    memberSubscripe: 'Suscripción de miembro',
                    memberGender: 'Tipo de miembro',
                    memberAddress: 'Dirección de miembro',
                    memberDate: 'Historial de miembros',
                    memberPhone: 'número de telefono',
                    memberImage: 'Imagen',
                    editMemberData: "Modificar datos de miembro",
                    submit: 'enviar',

                    //add edit member validation
                    validate_name: 'Por favor ingrese un nombre valido',
                    validate_name_invalid: "Sólo caracteres alfanuméricos",
                    validate_email: 'Por favor introduzca una dirección de correo electrónico válida ',
                    validate_type: 'Por favor ingresa un tipo válido',
                    validate_subscription: 'Por favor ingresa una suscripción válida',
                    validate_gender: 'Por favor ingresa un género válido',
                    validate_address: 'Por favor ingresa válido',
                    validate_date: 'Por favor introduzca una fecha valida',
                    validate_phoneNumber: 'Por favor ingresa válido',

                    //popUp 
                    popUp_title: '¿Estás seguro de que deseas eliminar a este miembro?',
                    popUp_cancel_btt: 'Cancelar',
                    popUp_delete_btt: 'Borrar',



                }
            },
        },
    });