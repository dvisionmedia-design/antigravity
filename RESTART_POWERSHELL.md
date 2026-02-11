# Quick Fix: Restart PowerShell

## Why This Is Needed

Node.js was successfully installed, but your current PowerShell window was opened **before** the installation.

When Node.js installed, it added itself to the system PATH (the list of folders where Windows looks for programs).

Your current PowerShell session doesn't know about this change yet - it's using the old PATH from when it was first opened.

## What to Do

### Step 1: Close Current PowerShell
- Close the PowerShell window you have open right now
- **Important**: Actually close it, don't just minimize it

### Step 2: Open Fresh PowerShell
1. Press the **Windows Key**
2. Type: `powershell`
3. Press **Enter**

### Step 3: Tell Antigravity
- Come back and say: **"New PowerShell opened"**

## What Happens Next

Once you open a fresh PowerShell, I will:
1. ✅ Verify Node.js is accessible
2. ✅ Install n8n-MCP globally
3. ✅ Configure Antigravity MCP settings
4. ✅ Test the connection
5. ✅ You'll be ready to use n8n-MCP!

---

**This is a normal step - just needs a fresh terminal session!**
