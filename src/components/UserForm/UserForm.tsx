import { useActionState } from 'react';

import './UserForm.css';
import { userDataUpdate } from '../../services';
import { SubmitButton } from '../SubmitButton';

export const UserForm = () => {
  const [state, formAction, isPending] = useActionState(userDataUpdate, null);

  return (
    <form action={formAction} className="user-form">
      <div className="user-form__group">
        <label htmlFor="firstName" className="user-form__label">
          First name:
        </label>
        <input
          defaultValue={state?.firstName}
          type="text"
          name="firstName"
          className="user-form__input"
          disabled={isPending}
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="lastName" className="user-form__label">
          Last name:
        </label>
        <input
          defaultValue={state?.lastName}
          type="text"
          name="lastName"
          className="user-form__input"
          disabled={isPending}
        />
      </div>
      <div className="user-form__group">
        <label htmlFor="email" className="user-form__label">
          Email:
        </label>
        <input
          defaultValue={state?.email}
          type="email"
          name="email"
          className="user-form__input"
          disabled={isPending}
        />
      </div>
      {state?.error && <div className="user-form__error">{state.error}</div>}
      <SubmitButton />
    </form>
  );
};
