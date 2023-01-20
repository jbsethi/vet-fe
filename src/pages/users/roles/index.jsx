import { useNavigate } from 'react-router';

// material-ui
import { Button } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import EntityList from 'components/@extended/EntityList';

import RoleListToolbar from './RoleListToolbar';

// ==============================|| Role PAGE ||============================== //

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

const RolePage = () => {
  const navigate = useNavigate();

  return (
    <MainCard title="Roles" secondary={<Button onClick={() => navigate('/users/roles/permissions')}>Permissions</Button>}>
      <RoleListToolbar></RoleListToolbar>
      <EntityList
        columns={columns}
        list={[
          {
            id: 1,
            name: 'Jahanzeb',
            address: 'abc',
            phone: '123456',
            email: 'jahanzebsethi@mgial.com'
          }
        ]}
      ></EntityList>
    </MainCard>
  );
};
export default RolePage;
