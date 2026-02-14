const fetch = require('node-fetch');

async function test() {
    console.log('Sending request to n8n...');
    try {
        const response = await fetch('http://127.0.0.1:5678/webhook/fitness-coach-v2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'ping', sessionId: 'test' })
        });
        console.log('Status:', response.status);
        const text = await response.text();
        console.log('Response:', text);
    } catch (e) {
        console.error('Error:', e.message);
    }
}

test();
