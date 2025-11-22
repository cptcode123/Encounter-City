import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageName = searchParams.get('page');

  if (!pageName) {
    return NextResponse.json({ error: 'Page name is required' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'data', `${pageName}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }
}

