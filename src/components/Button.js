import React from 'react';
import style from './button.module.css';
import { ReactComponent as Loading } from './assets/Icon_Loading_01_Default.svg';

export const Button = ({ text, buttonStyle, onClick, disabled, isLoading, isOpacity }) => {
    let buttonClass = isOpacity ? style.defaultOpacity : style.default;
    if (disabled) buttonClass = isOpacity ? style.disabledOpacity : style.disabled;
    if (isLoading) buttonClass = style.loading;

    return <button
        className={`${style.button} ${buttonClass} `}
        style={buttonStyle}
        onClick={onClick}
        disabled={disabled || isLoading}>
        {isLoading ? <Loading className={style.spinner} /> : text}
    </button>;
};