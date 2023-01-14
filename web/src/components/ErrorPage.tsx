import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function ErrorPage() {
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        sx={{ flex: 1 }}
      >
        Sorry, There is an error.
      </Typography>
    </Toolbar>
  );
}

export default ErrorPage;
