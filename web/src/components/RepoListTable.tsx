import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { Repo } from '../types/Repo';

interface RepoListTableProps {
  repos: Repo[];
  filterLanguage: string;
}

function RepoListTable({ repos, filterLanguage }: RepoListTableProps) {
  const navigate = useNavigate();

  const filterdRepo = () => {
    if (!filterLanguage) {
      return repos;
    }
    return repos.filter((repo: Repo) => repo.language === filterLanguage);
  };

  const handleRepoClick = (repo: Repo) => {
    navigate(`repos/${repo.id}`, { state: { repo } });
  };

  return (
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
          {filterdRepo().map((repo: Repo) => (
            <TableRow
              onClick={() => handleRepoClick(repo)}
              key={repo.id}
              sx={{
                cursor: 'pointer',
                '&:last-child td, &:last-child th': { border: 0 },
              }}
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
  );
}

export default RepoListTable;
