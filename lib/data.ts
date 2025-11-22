import fs from 'fs';
import path from 'path';

export async function getPageData<T>(pageName: string): Promise<T> {
  // Server-side: read from file system
  if (typeof window === 'undefined') {
    const filePath = path.join(process.cwd(), 'data', `${pageName}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  }
  // Client-side: fetch from API
  const response = await fetch(`/api/content?page=${pageName}`);
  if (!response.ok) {
    throw new Error('Failed to fetch page data');
  }
  return response.json() as Promise<T>;
}

