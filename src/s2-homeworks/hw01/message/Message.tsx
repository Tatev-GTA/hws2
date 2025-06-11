import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number;
        user?: { // Сделал user и его свойства опциональными, на случай, если они не всегда передаются
            avatar?: string;
            name?: string;
        };
        text?: string; // Сделал text и time опциональными, на случай, если они не всегда передаются
        time?: string;
    };

}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user?.avatar} // добавил src
                    alt="User Avatar" // добавил alt
                    className={s.avatar} // добавил класс для стилизации
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user?.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                         {props.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.time}
            </div>
        </div>
    )
}

export default Message
