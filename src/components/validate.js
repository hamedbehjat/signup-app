export const validate = (data) => {

    const errors = {};

    if (!data.name.trim()) {
        errors.name= "Username is required"
    } else {
        delete  errors.name
    }

    if (!data.email) {
        errors.email= "Email is required"
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
        errors.email= "Email is not valid"
    }

    if (!data.password) {
        errors.password= "Password is required";
    } else if (data.password.length < 6) {
        errors.password= "Password is too short";
    } else {
        delete  errors.password
    }

    if (!data.confirmPassword) {
        errors.confirmPassword= "Confirm password is required"
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword= "passwords don not match"
    } else {
        delete  errors.confirmPassword
    }

    if (!data.isAccepted) {
        errors.isAccepted= "regulation must be accepted"
    } else {
        delete  errors.isAccepted
    }

    return errors

}