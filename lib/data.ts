import 'server-only';
import fs from 'fs';
import path from 'path';

export async function getPageData<T>(pageName: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'data', `${pageName}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

