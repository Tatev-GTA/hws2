import React from 'react'
import s from './FriendMessage.module.css'
export type FriendMassegePropsType = {

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
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMassegePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user?.avatar} // добавил src
                    alt="User Avatar" // добавил alt
                    className={s.avatar} //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user?.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                       {props.message.user?.name}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
