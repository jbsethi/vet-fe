import { useCallback } from 'react';
import { createContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { userMe, getAuthToken, logout } from 'api/auth';

export const authContext = createContext({
  authenticated: false
});

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [isValidating, setIsValidating] = useState(true);

  const validateUser = useCallback(() => {
    userMe()
      .then((user) => {
        setUser({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isActive: user.isActive
        });

        setRole({
          id: user.role.id,
          name: user.role.name,
          description: user.role.description
        });

        setPermissions(
          user.role.permissions.map((permission) => ({
            id: permission.id,
            name: permission.name,
            description: permission.description
          }))
        );

        setAuthenticated(true);
      })
      .catch(async (error) => {
        console.error(error);
        await logout();
        return;
      })
      .finally(() => {
        console.info('validating called !');
        setIsValidating(false);
      });
  }, []);

  useEffect(() => {
    if (getAuthToken()) {
      validateUser();
    } else {
      setIsValidating(false);
    }
  }, [validateUser]);

  const childContent = authenticated ? children : <Navigate to="/login" replace />;

  return (
    <authContext.Provider
      value={{
        user,
        role,
        permissions,
        authenticated,
        setAuthenticated
      }}
    >
      {isValidating ? 'Loading Please wait !' : childContent}
    </authContext.Provider>
  );
};

export default AuthProvider;
