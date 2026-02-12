export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, sessionId } = body;

        const response = await fetch('http://localhost:5678/webhook/fitness-coach-v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                sessionId,
            }),
        });

        if (!response.ok) {
            throw new Error(`n8n responded with status: ${response.status}`);
        }

        const data = await response.json();

        // The data now comes from our Metric Extractor node
        const result = Array.isArray(data) ? data[0] : data;

        return Response.json({
            success: true,
            output: result.output || result.text || result.message || JSON.stringify(result),
            metrics: result.metrics || null,
        });
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
