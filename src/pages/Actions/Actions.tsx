import './Actions.css';
import { UserForm, MessageForm } from '../../components';

export const Actions = () => {
  return (
    <>
      {/* Start of meta section */}
      <title>Actions page</title>
      <meta name="keywords" content="Test meta and React actions" />
      {/* End of meta section */}
      <div className="page-container">
        <h1>Actions page</h1>
        <div className="actions__wrapper">
          <div className="actions__panel">
            <UserForm />
          </div>
          <div className="actions__panel">
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
};
