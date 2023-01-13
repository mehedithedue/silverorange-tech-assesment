import { Request, Response, Router } from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { Repo } from '../models/Repo';
import { getAPI } from '../utils/client';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  try {
    const repoFromAPI: Repo[] = await getAPI('users/silverorange/repos');

    const repoFromFile: Repo[] = JSON.parse(
      await readFile(path.resolve(__dirname, '../../data/repos.json'), {
        encoding: 'utf-8',
      })
    );

    const combinedRepos: Repo[] = [...repoFromAPI, ...repoFromFile];

    const filteredRepos: Repo[] = combinedRepos.filter(
      (repo: Repo) => !repo.fork
    );

    res.status(200);

    res.json(filteredRepos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});