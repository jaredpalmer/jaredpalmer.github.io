export interface GitHubRepo {
  /** Repo name */
  name: string;
  /** Repo description */
  description: string;
  /** Repo URL */
  url: string;
  /** Star count */
  stars: string;
}

export const GitHubApi = {
  /** Load Jared's repos */
  getRepos(): Promise<GitHubRepo[]> {
    return fetch('https://gh-repos-jp.now.sh').then(res => res.json());
  },
};
