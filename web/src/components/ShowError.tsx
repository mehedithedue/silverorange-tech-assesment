import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

interface ShowErrorProps {
  errorHeading?: string;
  errorText: string;
}

export default function ShowError({ errorHeading, errorText }: ShowErrorProps) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        {errorHeading && <AlertTitle>{errorHeading}</AlertTitle>}
        {errorText}
      </Alert>
    </Stack>
  );
}
