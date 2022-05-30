import React from "react";
import buttonStyle from './Button.module.scss';

class Button extends React.Component <{ children: string }> {
    render() {
        return (
            <button className={buttonStyle.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;

