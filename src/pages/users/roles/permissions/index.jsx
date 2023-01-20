// project import
import MainCard from 'components/MainCard';
import EntityList from 'components/@extended/EntityList';

import PermissionListToolbar from './PermissionListToolbar';

// ==============================|| Permission PAGE ||============================== //

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

const PermissionPage = () => (
  <MainCard title="Permissions">
    <PermissionListToolbar></PermissionListToolbar>
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

export default PermissionPage;
