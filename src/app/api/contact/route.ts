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

    // --- Neodove CRM Integration ---
    try {
      const neodovePayload = {
        name: fullName || '—',
        mobile: Number(phone) || phone, // CRM expects a number format usually, fallback to string if NaN
        email: email || '—',
        detail1: `Place: ${place}, Vehicle: ${vehicleName}, Year: ${carYear}`,
        detail2: `Car Type: ${carType}, Bank: ${existingBank}, Duration: ${existingDuration}`
      };

      const neodoveResponse = await fetch('https://4ab06d9e-c170-4b87-820a-dfef11d65c91.neodove.com/integration/custom/878f575e-f104-4b06-a8a1-dfe1528cc8ef/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(neodovePayload)
      });

      if (!neodoveResponse.ok) {
        console.error('[Neodove CRM Error]: Failed with status', neodoveResponse.status);
      }
    } catch (crmError) {
      console.error('[Neodove CRM API Error]:', crmError);
      // We log the error but don't fail the user request since data is safely in Google Sheets
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('[Google Sheets API Error]:', error.message);
    return NextResponse.json(
      { error: 'Failed to submit form. Please verify your .env.local configuration.' },
      { status: 500 }
    );
  }
}
