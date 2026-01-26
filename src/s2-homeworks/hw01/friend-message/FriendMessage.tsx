import React from 'react';
import s from './FriendMessage.module.css';

// Define the type for the user sending the message
type FriendMessageType = {
    id: number;
    user: {
        avatar: string;
        name: string;
    }
    message: {
        text: string;
        time: string;
    }
};

// Define the props type for the FriendMessage component
type FriendMessagePropsType = {
    message: FriendMessageType;
};

const FriendMessage: React.FC<FriendMessagePropsType> = (props) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar} // Display the friend's avatar
                    alt={props.message.user.name + ' avatar'} // Add alt text for accessibility
                    className={s.friendAvatar} // Assuming you have a style for the avatar
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name} {/* Display the friend's name */}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text} {/* Display the message text */}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time} {/* Display the message time */}
            </div>
        </div>
    );
};

export default FriendMessage;