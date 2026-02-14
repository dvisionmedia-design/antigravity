const http = require('http');

const data = JSON.stringify({
    message: 'diagnostic ping',
    sessionId: 'test-session-123'
});

const options = {
    hostname: 'localhost',
    port: 5678,
    path: '/webhook/fitness-coach-v3',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log('Hitting n8n at http://127.0.0.1:5678/webhook/fitness-coach-v2...');

const req = http.request(options, (res) => {
    console.log('Status Code:', res.statusCode);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error('Error:', error.message);
});

req.write(data);
req.end();
