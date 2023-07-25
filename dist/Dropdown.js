"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.DropButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _dropdownModule = _interopRequireDefault(require("./dropdown.module.css"));
var _Icon_Arrow_01_Default = require("./assets/Icon_Arrow_01_Default.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Dropdown = function Dropdown(_ref) {
  var value = _ref.value,
    setValue = _ref.setValue,
    children = _ref.children,
    dropdownClass = _ref.dropdownClass,
    dropdownStyle = _ref.dropdownStyle,
    disabled = _ref.disabled,
    scrollHeight = _ref.scrollHeight,
    isSplit = _ref.isSplit;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var modalRef = (0, _react.useRef)(null);
  var buttonRef = (0, _react.useRef)(null);
  var handleClickOutside = function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setOpenModal(false);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_dropdownModule.default.dropdown, " ").concat(dropdownClass.dropdown),
    style: dropdownStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    ref: buttonRef,
    className: "".concat(disabled ? _dropdownModule.default.disabledSelect : _dropdownModule.default.select, " \n            ").concat(dropdownClass.select, " ").concat(openModal && !disabled ? isSplit ? _dropdownModule.default.selectedSplit : _dropdownModule.default.selected : ''),
    onClick: function onClick() {
      return setOpenModal(!openModal);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _dropdownModule.default.buttonBox
  }, value), /*#__PURE__*/_react.default.createElement(_Icon_Arrow_01_Default.ReactComponent, {
    className: _dropdownModule.default.arrow
  })), /*#__PURE__*/_react.default.createElement("div", {
    ref: modalRef,
    style: {
      maxHeight: scrollHeight
    },
    className: "".concat(_dropdownModule.default.modal, " ").concat(isSplit ? _dropdownModule.default.modalSplit : '', "\n                ").concat(openModal && !disabled ? _dropdownModule.default.showModal : _dropdownModule.default.hideModal, " ").concat(dropdownClass.modal)
  }, _react.default.Children.map(children, function (child) {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      setOpenModal: setOpenModal,
      value: value,
      setValue: setValue,
      modalRef: modalRef,
      scrollHeight: scrollHeight
    });
  })));
};
exports.Dropdown = Dropdown;
var DropButton = function DropButton(_ref2) {
  var text = _ref2.text,
    value = _ref2.value,
    setValue = _ref2.setValue,
    onClick = _ref2.onClick,
    setOpenModal = _ref2.setOpenModal,
    modalRef = _ref2.modalRef,
    scrollHeight = _ref2.scrollHeight;
  var buttonRef = (0, _react.useRef)(null);
  var handleClick = function handleClick() {
    if (onClick) onClick();
    setValue(text);
    setOpenModal(false);
  };
  (0, _react.useEffect)(function () {
    if (scrollHeight && value === text) {
      modalRef.current.scrollTop = buttonRef.current.scrollHeight * (value - 2.5);
    }
  }, [scrollHeight, value, text, modalRef]);
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    ref: buttonRef,
    onClick: handleClick,
    style: {
      color: value === text ? '#0A8CF0' : '#000'
    },
    className: _dropdownModule.default.dropButton
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _dropdownModule.default.buttonBox
  }, text));
};
exports.DropButton = DropButton;