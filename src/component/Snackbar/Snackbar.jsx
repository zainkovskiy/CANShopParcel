import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  const { open, message } = props;

  return (
      <Snackbar open={open} autoHideDuration={6000} anchorOrigin={ {vertical: 'top', horizontal: 'right'} }>
        <Alert severity="success" sx={{ width: '100%' }}>
          { message }
        </Alert>
      </Snackbar>
  );
}