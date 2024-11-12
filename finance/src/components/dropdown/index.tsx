import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonUi from '../button';
import IButtonUiProps from '../button/props';
import { BoxDropdownJss, BoxOptionsJss } from './jss';

export interface IOption {
    icon?: string;
    title?: string;
    onClick?: () => void;
}

export interface IDropdownProps extends IButtonUiProps {
    options: IOption[];
}

const DropdownUi: React.FC<IDropdownProps> = (props) => {
    const { options, ...buttonProps } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [dropUp, setDropUp] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Verifica a posição e ajusta o dropdown
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const shouldDropUp = window.innerHeight - rect.bottom < rect.height;
            setDropUp(shouldDropUp);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleOptionClick = (onClick?: () => void) => {
        if (onClick) {
            onClick();
        }
        setIsOpen(false)
    };

    return (<div style={{ position: 'relative' }}>
        <ButtonUi {...buttonProps} onClick={toggleDropdown} />

        {isOpen && (<BoxDropdownJss ref={dropdownRef} dropUp={dropUp}>
            {options.map((option) => (
                <BoxOptionsJss key={option.title} onClick={() => handleOptionClick(option.onClick)}>
                    {option.icon && <>{option.icon}</>}
                    {option.title}
                </BoxOptionsJss>
            ))}
        </BoxDropdownJss>)}
    </div>);
};

export default DropdownUi;
