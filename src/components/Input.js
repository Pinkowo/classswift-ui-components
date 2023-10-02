import React, { useState, useEffect } from 'react';
import style from './input.module.css';
import { ReactComponent as OpenEye } from './assets/Icon_Visibility_01_On.svg';
import { ReactComponent as CloseEye } from './assets/Icon_Visibility_01_Off.svg';
import { validateEmail, validatePassword, validatePhone } from './utils/validation';

export const Input = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={`${style.container} ${props.inputClass}`} style={props.inputStyle}>
            {props.label && <Label text={props.label} hasStar={props.hasStar} />}
            <InputContent {...props} showPassword={showPassword} />
            {props.maxLength && <span className={style.nameLength}>
                {props.value.length}/{props.maxLength}</span>}
            {props.type === 'password' &&
                <Eye {...{ showPassword, setShowPassword }}
                    value={props.value} disabled={props.disabled} />}
        </div>
    );
}


export const InputContent = ({ type = 'text', name, placeholder, value, setValue, showPassword, form, maxLength,
    error, disabled, hasStar }) => {
    const [isError, setIsError] = useState(error);
    let flag = false;

    useEffect(() => {
        if (error) setIsError(error);
    }, [error])

    useEffect(() => {
        if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
        if (name === 'passwordConfirm' && value === form.password) setIsError(false);
    }, [form, name, value])

    const detectValue = (inputValue) => {
        if (maxLength) {
            if (inputValue.length <= maxLength) setValue(inputValue);
            else setValue(inputValue.substring(0, maxLength));
        }
    }
    const onChange = (e) => {
        if (flag) setValue(e.target.value);
        else detectValue(e.target.value)
    }
    const onCompositionStart = () => {
        flag = true;
    }
    const onCompositionEnd = () => {
        flag = false;
        detectValue(value);
    }
    const onFocus = () => setIsError(false);
    const onBlur = () => {
        if (value === '' && hasStar) setIsError(true);
        if (type === 'email' && !validateEmail(value)) setIsError(true);
        if (type === 'password' && !validatePassword(value)) setIsError(true);
        if (type === 'tel' && !validatePhone(value)) setIsError(true);
        if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
        if (maxLength) setValue(value.substring(0, maxLength));
    };

    return (
        <input
            type={showPassword ? 'text' : type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onCompositionStart={onCompositionStart}
            onCompositionEnd={onCompositionEnd}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`${style.input} 
            ${isError && !disabled ? style.error : ''}
            ${disabled ? style.inputDisabled : ''}`}
            style={{ paddingRight: maxLength ? 60 : 16 }}
            disabled={disabled}
            autoComplete="on"
        />
    );
};

export const Label = ({ text, labelStyle, hasStar = true }) => {
    return (
        <label className={style.label} style={labelStyle}>
            {text}
            {hasStar && <span className={style.star}>*</span>}
        </label>
    );
}

const Eye = ({ showPassword, setShowPassword, value, disabled }) => {
    return (
        <>
            {(value && showPassword && !disabled) &&
                <OpenEye className={style.eye}
                    onClick={() => setShowPassword(false)} />}
            {(value && !showPassword && !disabled) &&
                <CloseEye className={style.eye}
                    onClick={() => setShowPassword(true)} />}
            {(!value || disabled) &&
                <CloseEye className={style.eyeDisabled} />}
        </>
    )
}