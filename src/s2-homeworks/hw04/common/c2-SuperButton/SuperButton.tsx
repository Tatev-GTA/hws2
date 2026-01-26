import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
    className?: string;
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled // Применяем стиль для отключенной кнопки
            : xType === 'red'
                ? ' ' + s.red // Применяем красный стиль
                : xType === 'secondary'
                    ? ' ' + s.secondary // Применяем второстепенный стиль
                    : ' ' + s.default) // Стиль по умолчанию, если нет конкретного xType или он не красный
        + (className ? ' ' + className : ''); // Добавляем любой переданный пользовательский класс // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
