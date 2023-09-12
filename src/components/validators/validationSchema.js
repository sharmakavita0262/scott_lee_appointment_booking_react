import * as Yup from 'yup';

export const LoginValidator = Yup.object().shape({
    uesr_email: Yup.string().email("Please enter valid email address!").required("Email is a required field!"),
    password: Yup.string().required("Password is a required field!").min(8, "Password has at least 8 characters").matches(
        /^\S+$/,
        "This field can not contain whitepaces"
    )
});

export const RegisterValidator = Yup.object().shape({
    first_name: Yup.string().required("First name is a required field!").matches(
        /^\S.*/,
        "This field can not contain whitepaces at first letter"
    ),
    last_name: Yup.string().required("Last name is a required field!").matches(
        /^\S.*/,
        "This field can not contain whitepaces at first letter"
    ),
    comments: Yup.string().required("Comments is a required field!").matches(
        /^\S+$/,
        "This field can not contain whitepaces"
    ),
    email: Yup.string().email("Please enter valid email address!").required("Email is a required field!"),
    // phone: Yup.string().required("Password is a required field!").min(8, "Password has at least 8 characters").matches(
    //     /^\S+$/,
    //     "This field can not contain whitepaces"
    // )
});