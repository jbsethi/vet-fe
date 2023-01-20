/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import { SearchOutlined as SearchIcon } from '@ant-design/icons';

const UserListToolbar = ({ handleClick }) => (
  <Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Box>Filters Here</Box>
      <Box sx={{ m: 1 }}>
        <Button onClick={() => handleClick({ action: 'new_use' })} color="primary" variant="contained">
          Add Users
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: <SearchIcon />
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default UserListToolbar;
