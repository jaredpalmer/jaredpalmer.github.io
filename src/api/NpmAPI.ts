import * as format from 'date-fns/format';

export interface NpmPackage {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

export const NpmApi = {
  getTotalPackageDownloads(pkg: string): Promise<NpmPackage> {
    return fetch(
      `https://api.npmjs.org/downloads/point/2015-01-01:${format(
        new Date(),
        'YYYY-MM-DD'
      )}/${pkg}`
    ).then(res => res.json());
  },
};
