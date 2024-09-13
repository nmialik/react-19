import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Header } from './layout/Header';
import Routes from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
