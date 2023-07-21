import React, { useState, useEffect } from 'react';
import style from './input.module.css';
import { ReactComponent as OpenEye } from './assets/Icon_Visibility_01_On.svg';
import { ReactComponent as CloseEye } from './assets/Icon_Visibility_01_Off.svg';
import { validateEmail, validatePassword, validatePhone } from './utils/validation';

export const Inputfield = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={`${style.container} ${props.isLong ? style.longInput : ''} 
        ${props.inputClass}`} style={props.inputStyle}>
            {props.text && <Label text={props.text} />}
            <Input {...props} showPassword={showPassword} />
            {props.maxLength && <span className={style.nameLength}>
                {props.value.length}/{props.maxLength}</span>}
            {props.type === 'password' &&
                <Eye {...{ showPassword, setShowPassword }}
                    value={props.value} />}
        </div>
    );
}


export const Input = ({ type = 'text', name, value, setValue, showPassword, form, maxLength,
    error = false, disabled = false }) => {
    const [isError, setIsError] = useState(error);
    useEffect(() => {
        if (error) setIsError(error);
    }, [error])

    useEffect(() => {
        if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
        if (name === 'passwordConfirm' && value === form.password) setIsError(false);
    }, [form, name, value])

    const onFocus = () => setIsError(false);
    const onBlur = () => {
        if (value === '') setIsError(true);
        if (type === 'email' && !validateEmail(value)) setIsError(true);
        if (type === 'password' && !validatePassword(value)) setIsError(true);
        if (type === 'tel' && !validatePhone(value)) setIsError(true);
        if (name === 'passwordConfirm' && value !== form.password) setIsError(true);
    };

    const onChange = (e) => {
        const ans = e.target.value;
        const newAns = ans.replace(/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]+/g, '');

        if (maxLength) {
            if (newAns.length <= maxLength) setValue(ans);
            else setValue(ans.substring(0, maxLength));
        } else setValue(ans);
    };

    return (
        <>
            <input
                type={showPassword ? 'text' : type}
                value={value}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`${style.input} 
            ${isError ? style.error : ''}`}
                disabled={disabled}
            />
        </>
    );
};

export const Label = ({ text }) => {
    return (
        <label className={style.label}>
            {text}
            <span className={style.star}> *</span>
        </label>
    );
}

const Eye = ({ showPassword, setShowPassword, value }) => {
    return (
        <>
            {(value && showPassword) &&
                <OpenEye className={style.eye}
                    onClick={() => setShowPassword(false)} />}
            {(value && !showPassword) &&
                <CloseEye className={style.eye}
                    onClick={() => setShowPassword(true)} />}
            {!value &&
                <CloseEye className={style.eyeDisabled} />}
        </>
    )
}