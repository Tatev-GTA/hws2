import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    ReactNode,
    useRef,
} from 'react'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'

type DefaultInputPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type SuperDebouncedInputPropsType =
    Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
                                                                         onChangeText,
                                                                         onDebouncedChange,
                                                                         value,
                                                                         ...restProps
                                                                     }) => {
    const timerId = useRef<number | null>(null)

    const onChangeTextCallback = (value: string) => {
        onChangeText?.(value)

        if (onDebouncedChange) {
            if (timerId.current) {
                clearTimeout(timerId.current)
            }

            timerId.current = window.setTimeout(() => {
                onDebouncedChange(value)
            }, 1500)
        }
    }

    return (
        <SuperInputText
            {...restProps}
            value={value ?? ''}
            onChangeText={onChangeTextCallback}
        />
    )
}

export default SuperDebouncedInput
