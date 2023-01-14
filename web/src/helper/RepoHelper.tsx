import { Repo } from '../types/Repo';

export const sortRepoByDate = (repoData: Repo[]) =>
  repoData.sort(
    (a, b) =>
      new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
  );

export const getDistinctLanguageFromRepo = (repoData: Repo[]): string[] =>
  repoData
    .map((repo) => repo.language)
    .filter((value, index, self) => self.indexOf(value) === index);
