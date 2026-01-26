import React from 'react'
import s from './SuperButton.module.css'

type SuperButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

const SuperButton: React.FC<SuperButtonProps> = (props) => {
    const {className, ...restProps} = props

    const finalClassName = `${s.default} ${className || ''}`

    return (
        <button
            {...restProps} // այստեղ կանցնի id, onClick, disabled, children
            className={finalClassName}
        >
            {props.children}
        </button>
    )
}

export default SuperButton
