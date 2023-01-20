import { useState } from 'react';
import { useNavigate } from 'react-router';

// material-ui
import { Button } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import EntityList from 'components/@extended/EntityList';

import UserListToolbar from './UserListToolbar';
import useFetchUsers from './useFetchUsers';
import RegisterUser from './RegisterUser';

// ==============================|| User PAGE ||============================== //

const columns = [
  {
    id: 'id',
    title: 'ID'
  },
  {
    id: 'name',
    title: 'Name'
  },
  {
    id: 'email',
    title: 'Email'
  }
];

const UserPage = () => {
  const navigate = useNavigate();
  const [newRegistrationModalOpen, setNewRegistrationModalOpen] = useState(false);

  const { users, isLoading } = useFetchUsers();

  const handleClick = ({ action }) => {
    switch (action) {
      case 'new_use':
        setNewRegistrationModalOpen(true);
        break;
      default:
        console.error('Invalid action performed !');
    }
  };

  const closeNewRegistrationModal = () => setNewRegistrationModalOpen(false);

  const newRegistrationModal = newRegistrationModalOpen && <RegisterUser closeModal={closeNewRegistrationModal}></RegisterUser>;

  return (
    <MainCard title="Users" secondary={<Button onClick={() => navigate('/users/roles')}>Roles & Permission</Button>}>
      <UserListToolbar handleClick={handleClick}></UserListToolbar>
      <EntityList isLoading={isLoading} columns={columns} list={users}></EntityList>

      {newRegistrationModal}
    </MainCard>
  );
};

export default UserPage;
