import React from "react";
import buttonStyle from './Button.module.scss';

interface Props{
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Button({children, type, onClick}: Props) {
    return (
        <button onClick={onClick} type={type} className={buttonStyle.botao}>
            {children}
        </button>
    )
}

export default Button;

