import { Routes, Route, Navigate } from 'react-router-dom';
import { Actions, Compiler } from './pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Compiler />} />
      <Route path="/actions" element={<Actions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
