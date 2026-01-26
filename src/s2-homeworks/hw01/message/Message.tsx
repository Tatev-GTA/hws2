import React from 'react';
import s from './Message.module.css';

// Define the type for the user who sent the message
export type UserMessageType = {
    avatar: string;
    name: string;
};

// Define the type for the message content itself
export type MessageContentType = {
    text: string;
    time: string;
};

// Define the complete type for a single message object
export type MessageType = {
    id: number;
    user: UserMessageType;
    message: MessageContentType;
};

// Define the props type for the Message component
export type MessagePropsType = {
    message: MessageType;
};

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar} // Display the user's avatar
                    alt={props.message.user.name + 'avatar'} // Add alt text for accessibility
                    className={s.avatar} // Assuming a class for avatar styling in Message.module.css
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/* создает студент*/}
                        {props.message.message.text}
                    </pre>

                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time} {/* Display the message time */}
            </div>
        </div>
    );
};

export default Message;