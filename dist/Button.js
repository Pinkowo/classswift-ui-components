"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttonModule = _interopRequireDefault(require("./button.module.css"));
var _Icon_Loading_01_Default = require("./assets/Icon_Loading_01_Default.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(_ref) {
  var text = _ref.text,
    className = _ref.className,
    buttonStyle = _ref.buttonStyle,
    onClick = _ref.onClick,
    disabled = _ref.disabled,
    isLoading = _ref.isLoading,
    isOpacity = _ref.isOpacity;
  var buttonClass = isOpacity ? _buttonModule.default.defaultOpacity : _buttonModule.default.default;
  if (disabled) buttonClass = isOpacity ? _buttonModule.default.disabledOpacity : _buttonModule.default.disabled;
  if (isLoading) buttonClass = _buttonModule.default.loading;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_buttonModule.default.button, " ").concat(buttonClass, " ").concat(className, " "),
    style: buttonStyle,
    onClick: onClick,
    disabled: disabled || isLoading
  }, isLoading ? /*#__PURE__*/_react.default.createElement(_Icon_Loading_01_Default.ReactComponent, {
    className: _buttonModule.default.spinner
  }) : text);
};
exports.Button = Button;