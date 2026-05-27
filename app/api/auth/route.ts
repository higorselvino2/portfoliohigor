import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const envPassword = process.env.ADMIN_PASSWORD || '1234'; // Fallback for dev

    if (password === envPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Senha incorreta' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
