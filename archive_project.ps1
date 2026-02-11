<#
.SYNOPSIS
    Archives the entire Antigravity project and Agent Brain into a portable ZIP file.

.DESCRIPTION
    This script creates a timestamped zip file containing:
    1. The project workspace (code, docs, workflows)
    2. The Agent Brain (memories, artifacts, conversation logs)
    
    This allows you to save the full state to an SSD, Cloud, etc.

.NOTES
    File Name      : archive_project.ps1
    Author         : Antigravity
    Prerequisite   : PowerShell and 7z/Compress-Archive (Built-in)
#>

$host.ui.RawUI.WindowTitle = "Antigravity Project Archiver"

# --- Configuration ---
$ProjectName = "n8n-Nextjs-Pipeline"
$Timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm"
$BackupName = "${ProjectName}_Backup_${Timestamp}"

# Paths
$ProjectDir = Get-Location
$BrainDir = "C:\Users\dvisi\.gemini\antigravity\brain\16abd2cd-b68b-41d7-986c-cd0385e02ef7"
$OutputDir = Join-Path $ProjectDir "backups"

# Create backup directory if it doesn't exist
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

$ZipPath = Join-Path $OutputDir "${BackupName}.zip"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   📦 ANTIGRAVITY PROJECT ARCHIVER" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Source Project: $ProjectDir"
Write-Host "2. Source Brain:   $BrainDir"
Write-Host "3. Destination:    $ZipPath"
Write-Host ""
Write-Host "⏳ Archiving... Please wait." -ForegroundColor Yellow

# Create a temporary folder to stage files
$TempStage = Join-Path $env:TEMP $BackupName
if (Test-Path $TempStage) { Remove-Item -Recurse -Force $TempStage }
New-Item -ItemType Directory -Force -Path $TempStage | Out-Null

# Copy Project Files (Excluding node_modules and .git if you prefer lighter backups)
$ProjectStage = Join-Path $TempStage "Project_Workspace"
Write-Host "   - Copying Project Files..." -NoNewline
Copy-Item -Path $ProjectDir -Destination $ProjectStage -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Done" -ForegroundColor Green

# Copy Brain Files
$BrainStage = Join-Path $TempStage "Agent_Brain"
Write-Host "   - Copying Agent Brain..." -NoNewline
Copy-Item -Path $BrainDir -Destination $BrainStage -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Done" -ForegroundColor Green

# Zip it up
Write-Host "   - Compressing to ZIP..." -NoNewline
Compress-Archive -Path "$TempStage\*" -DestinationPath $ZipPath -Force
Write-Host "Done" -ForegroundColor Green

# Cleanup
Remove-Item -Recurse -Force $TempStage

Write-Host ""
Write-Host "✅ ARCHIVE COMPLETE!" -ForegroundColor Green
Write-Host "📂 Saved to: $ZipPath" -ForegroundColor White
Write-Host ""
Write-Host "💡 You can move this .zip file to your SSD, Google Drive, or USB."
Write-Host "   To restore: Extract the 'Agent_Brain' contents back to the brain directory and open the workspace."
Write-Host ""
pause
