import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  TextField,
  Modal,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Stack,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormHelperText
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import ModalActions from 'components/@extended/ModalActions';

const RegisterUser = ({ closeModal }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 1994,
      isActive: false
    }
  });

  const [checked, setChecked] = useState(false);

  const handleClose = () => {
    closeModal();
  };

  const handleCancel = () => {
    console.log('cancel handle click !');
  };

  const handleReset = () => {
    console.log('reset handle click !');
  };

  const onHandleSubmit = () => console.log('form submitted !');

  console.log(errors.password, errors.confirmPassword);

  return (
    <Modal open={true} onClose={handleClose} aria-labelledby="modal-add-new-user" aria-describedby="modal-new-user-registration">
      <Box
        sx={{
          background: 'white',
          height: '100vh'
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Register New User
            </Typography>
            <Button onClick={handleClose} color="inherit">
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            p: 3,
            pb: 10
          }}
        >
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
              <Grid item sm={6} xs={12}>
                <Stack>
                  <InputLabel>First Name</InputLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <TextField fullWidth placeholder="First Name" variant="outlined" {...field} />}
                  />
                </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack>
                  <InputLabel>Last Name</InputLabel>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => <TextField fullWidth placeholder="Last Name" variant="outlined" {...field} />}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack>
                  <InputLabel>Email</InputLabel>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field }) => <TextField fullWidth type="email" placeholder="Email" variant="outlined" {...field} />}
                  />
                </Stack>
                {errors.email && (
                  <FormHelperText error id="helper-text-firstname-signup">
                    Provide Valid Email address !
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack>
                  <InputLabel>Password</InputLabel>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field }) => <TextField fullWidth type="password" placeholder="Password" variant="outlined" {...field} />}
                  />
                  {errors.password && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      Password must match pattern !
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack>
                  <InputLabel>Retype Password</InputLabel>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      validate: (value) => {
                        const { password } = getValues();
                        return password === value || 'Passwords should match!';
                      }
                    }}
                    render={({ field }) => (
                      <TextField fullWidth type="password" placeholder="Retype Password" variant="outlined" {...field} />
                    )}
                  />
                  {errors.confirmPassword && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      Password empty or missmatch !
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack>
                  <InputLabel>Role</InputLabel>
                  <Autocomplete
                    disablePortal
                    id="combo-box"
                    onChange={(event, value) => setValue('role', value.id)}
                    options={[{ label: 'The Shawshank Redemption', id: 1994 }]}
                    isOptionEqualToValue={(option, value) => option.id === value}
                    renderInput={(params) => <TextField {...params} hiddenLabel fullWidth variant="outlined" placeholder="Role" />}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography>is Active ?</Typography>}
                  />
                </Stack>
              </Grid>
            </Grid>

            <ModalActions onResetClick={() => handleReset()} onCancelClick={() => handleCancel()}></ModalActions>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegisterUser;
