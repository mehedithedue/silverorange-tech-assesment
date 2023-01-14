import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import {
  getDistinctLanguageFromRepo,
  sortRepoByDate,
} from '../helper/RepoHelper';
import useAxiosGet from '../hooks/useAxiosGet';
import { Repo } from '../types/Repo';
import RepoListTable from './RepoListTable';
import SelectLanguage from './SelectLanguage';
import ShowError from './ShowError';

function RepoList(): JSX.Element | null {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languageList, setLanguageList] = useState<string[]>([]);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('');

  const { data, error } = useAxiosGet('repos');

  useEffect(() => {
    if (data !== null) {
      const sortedData: Repo[] = sortRepoByDate(data);
      const languages: string[] = getDistinctLanguageFromRepo(data);

      setRepos(sortedData);
      setLanguageList(languages);
    }
    if (error !== null) {
      setErrorText(error);
    }
  }, [data, error]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, mt: 2, p: 2 }}>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={10}>
            <h2>RepoList List</h2>
          </Grid>
          <Grid item={true} xs={2}>
            <SelectLanguage
              setLanguage={setLanguage}
              languageList={languageList}
              language={language}
            />
          </Grid>
        </Grid>

        {repos && <RepoListTable repos={repos} filterLanguage={language} />}

        {errorText && <ShowError errorText={errorText} />}
      </Paper>
    </Box>
  );
}

export default RepoList;
