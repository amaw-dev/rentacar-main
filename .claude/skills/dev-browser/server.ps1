# dev-browser server startup script for Windows PowerShell

param(
    [switch]$Headless
)

# Change to script directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

# Set headless mode
if ($Headless) {
    $env:HEADLESS = "true"
    Write-Host "Starting in headless mode..."
} else {
    $env:HEADLESS = "false"
}

# Detect package manager and install dependencies
Write-Host "Installing dependencies..."
if (Get-Command bun -ErrorAction SilentlyContinue) {
    bun install
    Write-Host "Starting dev-browser server..."
    bun x tsx scripts/start-server.ts
} elseif (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm install
    Write-Host "Starting dev-browser server..."
    pnpm exec tsx scripts/start-server.ts
} elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    npm install
    Write-Host "Starting dev-browser server..."
    npx tsx scripts/start-server.ts
} else {
    Write-Error "No package manager found. Please install npm, pnpm, or bun."
    exit 1
}
