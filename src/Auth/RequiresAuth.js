import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UseAuth } from '../Contexts/AuthContext';

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = UseAuth();
  const location = useLocation();
  return (
    <>
      {
        isLoggedIn ? <>{children}</> : <Navigate to="/login" state={{ from: location }} />
      }
    </>
  )
}
