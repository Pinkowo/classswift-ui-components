"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = validateEmail;
exports.validatePassword = validatePassword;
exports.validatePhone = validatePhone;
function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
function validatePassword(password) {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,}$/;
  return regex.test(password);
}
function validatePhone(phone) {
  var regex = /^[0-9()\-.#]+$/;
  return regex.test(phone);
}