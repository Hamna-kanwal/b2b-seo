import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/db.js';
import Query from '@/models/Query';

// 1. GET Handler - Used by your Admin Panel to retrieve queries
export async function GET() {
  try {
    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: 'Database is not configured' },
        { status: 503 }
      );
    }

    // Fetch all queries sorted newest first
    const queries = await Query.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, queries },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching queries:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch queries' },
      { status: 500 }
    );
  }
}

// 2. POST Handler - Used by your Contact Form to submit queries
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, website, subject, message } = body; // <-- Added website here

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: 'Database is not configured' },
        { status: 503 }
      );
    }

    const fullName = `${firstName} ${lastName || ''}`.trim();

    const newQuery = await Query.create({
      firstName: firstName.trim(),
      lastName: lastName ? lastName.trim() : '',
      name: fullName, // Saves both ways so q.name always works in the admin UI
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      website: website ? website.trim() : null, // <-- Added website here
      subject: subject || 'Free Energy Audit Request',
      message: message.trim(),
      status: 'pending',
    });

    return NextResponse.json(
      { success: true, message: 'Query submitted successfully!', queryId: newQuery._id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in POST /api/queries:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}