"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Inputfield = exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inputModule = _interopRequireDefault(require("./input.module.css"));
var _Icon_Visibility_01_On = require("./assets/Icon_Visibility_01_On.svg");
var _Icon_Visibility_01_Off = require("./assets/Icon_Visibility_01_Off.svg");
var _validation = require("./utils/validation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Inputfield = function Inputfield(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_inputModule.default.container, " ").concat(props.isLong ? _inputModule.default.longInput : '', " \n        ").concat(props.inputClass),
    style: props.style
  }, props.text && /*#__PURE__*/_react.default.createElement(Label, {
    text: props.text
  }), /*#__PURE__*/_react.default.createElement(Input, _extends({}, props, {
    showPassword: showPassword
  })), props.maxLength && /*#__PURE__*/_react.default.createElement("span", {
    className: _inputModule.default.nameLength
  }, props.value.length, "/", props.maxLength), props.type === 'password' && /*#__PURE__*/_react.default.createElement(Eye, {
    showPassword: showPassword,
    setShowPassword: setShowPassword,
    value: props.value
  }));
};
exports.Inputfield = Inputfield;
var Input = function Input(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    name = _ref.name,
    value = _ref.value,
    setValue = _ref.setValue,
    showPassword = _ref.showPassword,
    form = _ref.form,
    maxLength = _ref.maxLength,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useState3 = (0, _react.useState)(error),
    _useState4 = _slicedToArray(_useState3, 2),
    isError = _useState4[0],
    setIsError = _useState4[1];
  (0, _react.useEffect)(function () {
    if (error) setIsError(error);
  }, [error]);
  (0, _react.useEffect)(function () {
    if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
    if (name === 'passwordConfirm' && value === form.password) setIsError(false);
  }, [form, name, value]);
  var onFocus = function onFocus() {
    return setIsError(false);
  };
  var onBlur = function onBlur() {
    if (value === '') setIsError(true);
    if (type === 'email' && !(0, _validation.validateEmail)(value)) setIsError(true);
    if (type === 'password' && !(0, _validation.validatePassword)(value)) setIsError(true);
    if (type === 'tel' && !(0, _validation.validatePhone)(value)) setIsError(true);
    if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
  };
  var onChange = function onChange(e) {
    var ans = e.target.value;
    var newAns = ans.replace(/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]+/g, '');
    if (maxLength) {
      if (newAns.length <= maxLength) setValue(ans);else setValue(ans.substring(0, maxLength));
    } else setValue(ans);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: showPassword ? 'text' : type,
    value: value,
    name: name,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    className: "".concat(_inputModule.default.input, " \n            ").concat(isError ? _inputModule.default.error : ''),
    disabled: disabled
  }));
};
exports.Input = Input;
var Label = function Label(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: _inputModule.default.label
  }, text, /*#__PURE__*/_react.default.createElement("span", {
    className: _inputModule.default.star
  }, " *"));
};
exports.Label = Label;
var Eye = function Eye(_ref3) {
  var showPassword = _ref3.showPassword,
    setShowPassword = _ref3.setShowPassword,
    value = _ref3.value;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value && showPassword && /*#__PURE__*/_react.default.createElement(_Icon_Visibility_01_On.ReactComponent, {
    className: _inputModule.default.eye,
    onClick: function onClick() {
      return setShowPassword(false);
    }
  }), value && !showPassword && /*#__PURE__*/_react.default.createElement(_Icon_Visibility_01_Off.ReactComponent, {
    className: _inputModule.default.eye,
    onClick: function onClick() {
      return setShowPassword(true);
    }
  }), !value && /*#__PURE__*/_react.default.createElement(_Icon_Visibility_01_Off.ReactComponent, {
    className: _inputModule.default.eyeDisabled
  }));
};