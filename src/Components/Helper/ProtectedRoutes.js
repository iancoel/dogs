import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoutes = (props) => {
  const { login } = React.useContext(UserContext);
  console.log(login);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return <div>teste</div>;
};

export default ProtectedRoutes;
