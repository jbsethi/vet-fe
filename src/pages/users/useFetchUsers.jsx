import { useState, useEffect, useCallback } from 'react';
import { getUsersList } from 'api/users/index';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refetch = useCallback(async () => {
    getUsersList()
      .then((result) => setUsers(result.users))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    users,
    isLoading,
    refetch
  };
};

export default useFetchUsers;
