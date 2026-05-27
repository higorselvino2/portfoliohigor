import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Save to Supabase
    try {
      await supabase.from('contacts').insert([data]);
    } catch(err) {
      console.error('Supabase error:', err);
    }
    
    // Retrieve n8n webhook URL from environment variables
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.warn('N8N_WEBHOOK_URL is not set. Data was not sent to n8n.');
      return NextResponse.json({ success: true, message: 'Data saved to DB, but n8n webhook not configured.' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Failed to trigger n8n webhook:', response.statusText);
      return NextResponse.json({ success: false, error: 'Failed to trigger workflow' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in n8n route:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
