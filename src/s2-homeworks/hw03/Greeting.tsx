import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // Fixed: name is a string (the value of the input)
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // Fixed: Takes a ChangeEvent from an input
    addUser: () => void // Fixed: A function that adds a user, takes no arguments, returns void
    onBlur: () => void // Fixed: A function for blur event, takes no arguments, returns void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void // Fixed: Takes a KeyboardEvent from an input
    error: string // Fixed: error is a string message
    totalUsers: number // Fixed: totalUsers is a number
    lastUserName?: string // Fixed: lastUserName is an optional string
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    // Fixed: inputClass should apply s.errorInput only if there's an error
    const inputClass = error ? s.errorInput : s.input; // Assuming s.input is your default input style

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass} // Applied dynamic class
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()} // disabled if name is empty or just spaces
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting