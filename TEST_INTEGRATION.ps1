$JsonBody = '{ "action": "scan_initiated", "user": "commander_test" }'

Write-Host "--- Mission Control Uplink Test ---" -ForegroundColor Cyan

try {
    $Response = Invoke-RestMethod -Uri "http://localhost:5678/webhook/mission-control" -Method Post -ContentType "application/json" -Body $JsonBody
    
    if ($Response.success) {
        Write-Host "✅ SUCCESS: Signal Received" -ForegroundColor Green
        Write-Host "📡 Message: $($Response.message)" -ForegroundColor White
        Write-Host "⏰ Timestamp: $($Response.timestamp)" -ForegroundColor DarkGray
    }
    else {
        Write-Host "❌ FAILURE: Link Unstable" -ForegroundColor Red
    }
}
catch {
    Write-Host "❌ CRITICAL FAILURE: $($_.Exception.Message)" -ForegroundColor Red
}
