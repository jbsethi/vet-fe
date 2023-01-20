import { Box, Button } from '@mui/material';

const ModalActions = ({ onCancelClick, onResetClick }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: '80px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 1,
        borderTop: '1px solid #ccc'
      }}
    >
      <Box>
        <Button
          sx={{
            xs: {
              minWidth: '70px'
            },
            md: {
              minWidth: '110px'
            }
          }}
          onClick={onResetClick}
        >
          Reset
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          sx={{
            minWidth: '110px'
          }}
          variant="outlined"
          onClick={onCancelClick}
        >
          Cancel
        </Button>
        <Button
          sx={{
            minWidth: '110px'
          }}
          variant="contained"
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ModalActions;
