import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import { Repo } from '../types/Repo';
import ShowError from './ShowError';

function RepoList(): JSX.Element | null {
  const [repos, setRepos] = useState<Repo[]>([]);

  const { data, error } = useAxiosGet('repos');

  const sortByDate = (repoData: Repo[]) =>
    repoData
      .sort(
        (a, b) =>
          new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
      )
      .reverse();

  useEffect(() => {
    if (data !== null) {
      setRepos(sortByDate(data));
    }
  }, [data]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, mt: 2, p: 2 }}>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={8}>
            <h2>RepoList List</h2>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>description</TableCell>
                <TableCell>language</TableCell>
                <TableCell>Number of forks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map((repo: Repo) => (
                <TableRow
                  key={repo.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {repo.name}
                  </TableCell>
                  <TableCell>{repo.description || 'N/A'}</TableCell>
                  <TableCell>{repo.language}</TableCell>
                  <TableCell>{repo.forks_count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {error && <ShowError errorText={error} />}
      </Paper>
    </Box>
  );
}

export default RepoList;
