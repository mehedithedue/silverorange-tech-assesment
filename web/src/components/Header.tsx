import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
    </Toolbar>
  );
}

export default Header;
