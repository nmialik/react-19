import { useState, useOptimistic, useRef } from 'react';

import './MessageForm.css';
import { TMessage } from './MessageForm.types';

const deliverMessage = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
};

export const MessageForm = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<TMessage[]>(messages);
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessage = async (formData: FormData) => {
    const sendMessage = await deliverMessage(formData.get('message') as string);
    setMessages((prevMessages: TMessage[]) => [
      ...prevMessages,
      {
        text: sendMessage,
        sending: false,
      },
    ]);
  };

  const formAction = async (formData: FormData) => {
    const newMessage = formData.get('message') as string;

    addOptimisticMessage((prevMessages) => [
      ...prevMessages,
      {
        text: newMessage,
        sending: true,
      },
    ]);

    formRef.current?.reset();
    await sendMessage(formData);
  };
  return (
    <div className="message-form">
      <form ref={formRef} action={formAction} className="message-form__container">
        <div className="message-form__group">
          <label htmlFor="message" className="message-form__label">
            New message:
          </label>
          <input type="text" name="message" className="message-form__input" required />
        </div>
        <button type="submit" className="message-form__button">
          Send
        </button>
      </form>
      <div>
        <h3>Messages:</h3>
        {optimisticMessages.map((message, index) => (
          <div className="message-form__item" key={index}>
            <span>{message.text}</span>
            <span className="message-form__status">{message.sending ? 'Sending...' : ''}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
