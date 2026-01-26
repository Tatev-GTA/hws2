import React, { useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from 'react'
import { message0 } from '../HW1' // Assumed type: { user: { avatar: string; name: string; } }
import s from './MessageSender.module.css'

// Type definitions for internal clarity (not changing 'any' on props)
type SenderInfoType = { user: { avatar: string; name: string; } };
type MessageContentForSenderType = { text: string; time: string; };
type MessageTypeForSender = { id: number; user: { avatar: string; name: string; }; message: MessageContentForSenderType; };
type MComponentProps = { message: MessageTypeForSender; };
type MComponentType = React.FC<MComponentProps>;

// The component that tests your component (do not change, do not touch 'any')
const MessageSender = (props: { M: MComponentType }) => { // Clarified 'M' prop's type for better understanding
    const M = props.M;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<MessageTypeForSender[]>([]); // State for messages
    const [text, setText] = useState<string>(''); // State for input text

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => { // Type for ChangeEvent
        setText(e.currentTarget.value);
    };

    // Effect to auto-resize the textarea based on content
    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'; // Reset height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set to scroll height
        }
    }, [text]); // Rerun when text changes

    const addMessage = () => {
        // Ensure message0 conforms to SenderInfoType structure
        const senderInfo: SenderInfoType = message0;

        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1, // Simple ID generation
                user: senderInfo.user, // Use the user info from message0
                message: {
                    text, // The current text from state
                    time: new Date().toTimeString().slice(0, 5), // Current time (e.g., "12:34")
                },
            },
        ]);
        setTimeout(() => setText(''), 4); // Clear the textarea after a slight delay
    };

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => { // Type for KeyboardEvent
        // Send message on Shift + Enter
        e.key === 'Enter' && e.shiftKey && addMessage();
    };

    return (
        <>
            {/* Map through messages and render them using the passed M component */}
            {messages.map((m) => (
                <M key={'message-' + m.id} message={m} />
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <button
                    id={'hw1-button'}
                    className={s.button}
                    onClick={addMessage} // Send message on button click
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default MessageSender;