import React, { useState, useEffect, useRef } from "react";
import style from './dropdown.module.css';
import { ReactComponent as ArrowDown } from './assets/Icon_Arrow_01_Default.svg';

export const Dropdown = ({ value, setValue, children, className, disabled, scrollHeight, isSplit }) => {
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
        ) {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`${style.dropdown} ${className.dropdown}`}>
            <button type="button" ref={buttonRef} className={`${disabled ? style.disabledSelect : style.select} ${className.select} 
            ${openModal && !disabled ? isSplit ? style.selectedSplit : style.selected : ''}`}
                onClick={() => setOpenModal(!openModal)}>
                {value}
                <ArrowDown className={`${style.arrow} ${disabled ? style.disabledArrow : ''}`} />
            </button>
            <div ref={modalRef} style={{ maxHeight: scrollHeight }}
                className={`${style.modal} ${isSplit ? style.modalSplit : ''}
                ${openModal && !disabled ? style.showModal : style.hideModal} ${className.modal}`}>
                {React.Children.map(children, child =>
                    React.cloneElement(child, { setOpenModal, value, setValue, modalRef, scrollHeight })
                )}
            </div>
        </div>
    );
};

export const DropButton = ({ text, value, setValue, onClick, setOpenModal, modalRef, scrollHeight }) => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (onClick) onClick();
        setValue(text);
        setOpenModal(false);
    };

    useEffect(() => {
        if (scrollHeight && value === text) {
            modalRef.current.scrollTop = buttonRef.current.scrollHeight * (value - 2.5);
        }
    }, [scrollHeight, value, text, modalRef]);

    return (
        <button
            type="button"
            ref={buttonRef}
            onClick={handleClick}
            style={{ color: value === text ? '#0A8CF0' : '#000' }}>
            {text}
        </button>
    );
};
