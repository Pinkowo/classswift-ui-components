export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

export function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,}$/;
    return regex.test(password);
}

export function validatePhone(phone) {
    const regex = /^[0-9()\-.#]+$/;
    return regex.test(phone);
}