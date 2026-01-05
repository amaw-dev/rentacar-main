import { serve } from "@/index.js";
import { execSync } from "child_process";
import { mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const tmpDir = join(__dirname, "..", "tmp");
const profileDir = join(__dirname, "..", "profiles");
const isWindows = process.platform === "win32";

// Create tmp and profile directories if they don't exist
console.log("Creating tmp directory...");
mkdirSync(tmpDir, { recursive: true });

console.log("Creating profiles directory...");
mkdirSync(profileDir, { recursive: true });

// Cross-platform helper: check if a command exists
function commandExists(command: string): boolean {
  try {
    const checkCmd = isWindows ? `where ${command}` : `which ${command}`;
    execSync(checkCmd, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Cross-platform helper: kill process on a specific port
function killProcessOnPort(port: number): void {
  try {
    if (isWindows) {
      // Windows: use netstat + taskkill
      const result = execSync(
        `netstat -ano | findstr :${port} | findstr LISTENING`,
        { encoding: "utf-8" }
      );
      const lines = result.trim().split("\n");
      for (const line of lines) {
        const pid = line.trim().split(/\s+/).pop();
        if (pid && /^\d+$/.test(pid)) {
          try {
            execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
            console.log(`Killed process ${pid} on port ${port}`);
          } catch {
            // Process may have already exited
          }
        }
      }
    } else {
      // Unix: use lsof + kill
      const pid = execSync(`lsof -ti:${port}`, { encoding: "utf-8" }).trim();
      if (pid) {
        execSync(`kill -9 ${pid}`);
        console.log(`Killed process ${pid} on port ${port}`);
      }
    }
  } catch {
    // No process on port, which is expected
  }
}

// Cross-platform helper: get Playwright cache directory
function getPlaywrightCacheDir(): string {
  if (isWindows) {
    // Windows typically uses %LOCALAPPDATA%\ms-playwright
    const localAppData = process.env.LOCALAPPDATA;
    if (localAppData) {
      return join(localAppData, "ms-playwright");
    }
  }
  // Unix and fallback: ~/.cache/ms-playwright
  const homeDir = process.env.HOME || process.env.USERPROFILE || "";
  return join(homeDir, ".cache", "ms-playwright");
}

// Install Playwright browsers if not already installed
console.log("Checking Playwright browser installation...");

function findPackageManager(): { name: string; command: string } | null {
  const managers = [
    { name: "bun", command: "bunx playwright install chromium" },
    { name: "pnpm", command: "pnpm exec playwright install chromium" },
    { name: "npm", command: "npx playwright install chromium" },
  ];

  for (const manager of managers) {
    if (commandExists(manager.name)) {
      return manager;
    }
  }

  return null;
}

function isChromiumInstalled(): boolean {
  const playwrightCacheDir = getPlaywrightCacheDir();

  if (!existsSync(playwrightCacheDir)) {
    return false;
  }

  // Check for chromium directories (e.g., chromium-1148, chromium_headless_shell-1148)
  try {
    const entries = readdirSync(playwrightCacheDir);
    return entries.some((entry) => entry.startsWith("chromium"));
  } catch {
    return false;
  }
}

try {
  if (!isChromiumInstalled()) {
    console.log("Playwright Chromium not found. Installing (this may take a minute)...");

    const pm = findPackageManager();
    if (!pm) {
      throw new Error("No package manager found (tried bun, pnpm, npm)");
    }

    console.log(`Using ${pm.name} to install Playwright...`);
    execSync(pm.command, { stdio: "inherit" });
    console.log("Chromium installed successfully.");
  } else {
    console.log("Playwright Chromium already installed.");
  }
} catch (error) {
  console.error("Failed to install Playwright browsers:", error);
  console.log("You may need to run: npx playwright install chromium");
}

// Check if server is already running
console.log("Checking for existing servers...");
try {
  const res = await fetch("http://localhost:9222", {
    signal: AbortSignal.timeout(1000),
  });
  if (res.ok) {
    console.log("Server already running on port 9222");
    process.exit(0);
  }
} catch {
  // Server not running, continue to start
}

// Clean up stale CDP port if HTTP server isn't running (crash recovery)
// This handles the case where Node crashed but Chrome is still running on 9223
console.log("Cleaning up stale processes on CDP port 9223...");
killProcessOnPort(9223);

console.log("Starting dev browser server...");
const headless = process.env.HEADLESS === "true";
const server = await serve({
  port: 9222,
  headless,
  profileDir,
});

console.log(`Dev browser server started`);
console.log(`  WebSocket: ${server.wsEndpoint}`);
console.log(`  Tmp directory: ${tmpDir}`);
console.log(`  Profile directory: ${profileDir}`);
console.log(`\nReady`);
console.log(`\nPress Ctrl+C to stop`);

// Keep the process running
await new Promise(() => {});
