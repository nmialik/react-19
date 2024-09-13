import { useState } from 'react';

import './Compiler.css';
import { List } from '../../components/List';

export const Compiler = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Start of meta section */}
      <title>Compiler page</title>
      <meta name="keywords" content="Test meta and React compiler" />
      {/* End of meta section */}
      <div className="page-container">
        <h1>Compiler page</h1>
        <button onClick={handleCount} className="compiler__count-button">
          Count {count}
        </button>
        <List />
      </div>
    </>
  );
};
