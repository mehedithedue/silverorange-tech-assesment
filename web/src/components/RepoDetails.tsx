import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sortCommitByDate } from '../helper/RepoHelper';
import { Commit } from '../types/Commit';
import { Repo } from '../types/Repo';
import client from '../utils/client';
import ShowError from './ShowError';

function RepoDetails(): JSX.Element | null {
  const location = useLocation();
  const navigate = useNavigate();

  const repo: Repo = location.state.repo;

  const [commits, setCommits] = useState<Commit[]>([]);
  const [latestCommit, setLatestCommit] = useState<Commit | null>(null);

  useEffect(() => {
    const getCommitData = async (repository: Repo) => {
      const { data } = await client.get(repository.url + '/commits');
      setCommits(data);
    };
    if (repo) {
      getCommitData(repo);
    }
  }, [repo]);

  useEffect(() => {
    if (commits.length) {
      const sortedCommit = sortCommitByDate(commits);
      setLatestCommit(sortedCommit[0]);
    }
  }, [commits]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2, mt: 2, p: 2 }}>
          <Grid container={true} spacing={2}>
            <Grid item={true} xs={10}>
              <h2>Commit Details</h2>
            </Grid>
            <Grid item={true} xs={2}>
              <Button
                variant="contained"
                color="success"
                size="medium"
                onClick={() => navigate('/')}
              >
                Back
              </Button>
            </Grid>
          </Grid>
          {latestCommit && (
            <CardContent>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom={true}
              >
                Latest Commit
              </Typography>
              <Typography variant="h6" component="div">
                Author : {latestCommit && latestCommit.commit.author.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Date : {latestCommit && latestCommit.commit.author.date}
              </Typography>
              <Typography variant="body2">
                {latestCommit && latestCommit.commit.message}.
                <br />
              </Typography>
            </CardContent>
          )}
          {!latestCommit && (
            <ShowError errorText={'Sorry, there is no commit'} />
          )}
        </Paper>
      </Box>
    </>
  );
}

export default RepoDetails;
