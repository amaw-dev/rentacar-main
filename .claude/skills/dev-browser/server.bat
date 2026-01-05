@echo off
REM dev-browser server startup script for Windows CMD

cd /d "%~dp0"

REM Parse arguments
set HEADLESS=false
:parse_args
if "%~1"=="" goto :after_args
if "%~1"=="--headless" set HEADLESS=true
shift
goto :parse_args
:after_args

REM Install dependencies and start server
echo Installing dependencies...
where bun >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    bun install
    echo Starting dev-browser server...
    set HEADLESS=%HEADLESS%
    bun x tsx scripts/start-server.ts
    goto :end
)

where pnpm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    pnpm install
    echo Starting dev-browser server...
    set HEADLESS=%HEADLESS%
    pnpm exec tsx scripts/start-server.ts
    goto :end
)

where npm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    npm install
    echo Starting dev-browser server...
    set HEADLESS=%HEADLESS%
    npx tsx scripts/start-server.ts
    goto :end
)

echo Error: No package manager found. Please install npm, pnpm, or bun.
exit /b 1

:end
