// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : '';

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title ? `ピータンのポートフォリオ -  ${title }` : 'ピータンのポートフォリオ'}
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (e: any) {
    console.error(e.message);
    return new Response('OGP画像の生成に失敗', { status: 500 });
  }
}
