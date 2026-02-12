export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
        return Response.json({ success: false, error: 'Missing sessionId' }, { status: 400 });
    }

    try {
        const response = await fetch(`http://localhost:5678/webhook/fitness-coach-history?sessionId=${sessionId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`n8n responded with status: ${response.status}`);
        }

        const data = await response.json();
        return Response.json({ success: true, history: data });
    } catch (error: any) {
        console.error('History API Error:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
