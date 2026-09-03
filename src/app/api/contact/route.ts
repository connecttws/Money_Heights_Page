import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      fullName, 
      phone, 
      email, 
      place, 
      vehicleName, 
      carYear, 
      carType, 
      existingBank, 
      existingDuration 
    } = body;

    if (!fullName || !phone || !email || !place || !vehicleName || !carYear || !carType || !existingBank || !existingDuration) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName || '—',
            phone || '—',
            email || '—',
            place || '—',
            vehicleName || '—',
            carYear || '—',
            carType || '—',
            existingBank || '—',
            existingDuration || '—',
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('[Google Sheets API Error]:', error.message);
    return NextResponse.json(
      { error: 'Failed to submit form. Please verify your .env.local configuration.' },
      { status: 500 }
    );
  }
}
