import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    // Removed 'KeyboardEvent' and 'ReactNode' as they are not used in SuperCheckbox
} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void // Custom callback for checked state
    spanClassName?: string // Class for the span element (text next to checkbox)
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,        // Standard onChange from DefaultInputPropsType
        onChangeChecked, // Custom onChangeChecked prop
        className,       // Class applied to the input element
        spanClassName,   // Class applied to the span (text) element
        children,        // Content inside the <label>, typically text
        id,

        ...restProps // All other standard input props (e.g., 'checked', 'disabled')
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // Вызываем стандартный onChange, если он передан
        onChange?.(e)

        // Вызываем кастомный onChangeChecked, если он передан,
        // передавая ему checked свойство из объекта события
        onChangeChecked?.(e.currentTarget.checked)
    }

    // Применяем базовый класс и любой дополнительный класс, переданный через props.className
    const finalInputClassName = `${s.checkbox}${className ? ' ' + className : ''}`

    // Применяем базовый класс для спана и любой дополнительный класс, переданный через props.spanClassName
    // FIX: Changed `s.spanClassName` to `spanClassName` to correctly apply the passed prop.
    const finalSpanClassName = `${s.span}${spanClassName ? ' ' + spanClassName : ''}`


    return (
        <label className={s.label}>
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // Отдаем инпуту остальные пропсы (например, checked, disabled)
            />
            {children && ( // Отображаем children только если он есть
                <span
                    id={id ? id + '-span' : undefined}
                    className={finalSpanClassName} // Применяем объединенные классы для спана
                >
                    {children}
                </span>
            )}
        </label> // Благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox