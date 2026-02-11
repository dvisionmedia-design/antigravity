# Complete n8n-MCP Setup Guide for Your Local Docker n8n

**Your Setup**: n8n running in Docker Desktop on Windows  
**Most Likely URL**: `http://localhost:5678`

This guide assumes you know nothing. I'll explain every single step! 🚀

---

## 📍 STEP 1: Verify Your n8n is Running (2 minutes)

### What We're Doing
Making sure your Docker n8n container is actually running and accessible.

### How to Do It

1. **Open Docker Desktop**
   - Look for the Docker icon in your taskbar (bottom right, near the clock)
   - Click it to open Docker Desktop

2. **Check if n8n is running**
   - In Docker Desktop, click "Containers" on the left side
   - Look for a container with "n8n" in the name
   - It should show a green "Running" status
   - **If it's not running**: Click the ▶️ play button to start it

3. **Open your web browser** (Chrome, Edge, Firefox - any will work)
   - Type this in the address bar: `http://localhost:5678`
   - Press Enter

4. **What you should see**:
   - ✅ **Good**: n8n login page OR your n8n dashboard (if already logged in)
   - ❌ **Problem**: "Can't reach this page" or "Connection refused"
     - **Fix**: Go back to Docker Desktop and make sure n8n container is running

5. **Write down your URL**:
   - Most likely: `http://localhost:5678`
   - Sometimes: `http://127.0.0.1:5678` (same thing, different format)
   - **Save this** - you'll need it later!

---

## 🔑 STEP 2: Get Your n8n API Key (3 minutes)

### What We're Doing
Creating a special password (API key) so n8n-MCP can talk to your n8n instance.

### How to Do It

1. **Make sure you're logged in to n8n**
   - In your browser at `http://localhost:5678`
   - If you see a login screen, enter your username/password

2. **Find the Settings**
   - Look at the bottom-left corner of n8n
   - You'll see a **gear icon ⚙️** (Settings)
   - Click it

3. **Go to API settings**
   - A menu appears on the left side
   - Click on **"API"** (it's in the list)

4. **Create a new API key**
   - You'll see a section called "API Keys"
   - Click the blue **"Create API Key"** button
   - A popup appears

5. **Name your API key** (optional but helpful)
   - Type something like: `antigravity-mcp`
   - This helps you remember what this key is for
   - Click **"Create"**

6. **IMPORTANT: Copy the API key**
   - A long string of random letters and numbers appears
   - It looks like: `n8n_api_1234567890abcdefghijklmnopqrstuvwxyz`
   - **Click the copy button** or select all and Ctrl+C
   - **SAVE IT SOMEWHERE SAFE** - paste it in a text file temporarily
   - ⚠️ **You can only see this ONCE!** If you lose it, you'll need to create a new one

---

## 🎯 STEP 3: Choose Your Setup Method

You have two options. Here's my recommendation:

### **Option A: Hosted Service ☁️** (RECOMMENDED)

**Why I recommend this:**
- ✅ Easiest setup (5 minutes total)
- ✅ No software to install
- ✅ 100 free API calls per day (plenty for development)
- ✅ Automatic updates

**Downside:**
- ⚠️ 100 calls/day limit (but you can upgrade for $5/month if needed)

### **Option B: Self-Hosted 🏠**

**Why choose this:**
- ✅ Unlimited API calls
- ✅ Everything stays on your computer
- ✅ Free forever

**Downside:**
- ⚠️ Need to install software (npm)
- ⚠️ Slightly more complex setup

---

## ☁️ OPTION A: Hosted Service Setup (5 minutes)

### Step 3A-1: Create Account

1. **Open your browser**
   - Go to: `https://dashboard.n8n-mcp.com`

2. **Sign up**
   - Click **"Sign Up"** or **"Start for Free"**
   - Enter your email and create a password
   - Verify your email if needed

3. **Log in**
   - You'll see the dashboard

### Step 3A-2: Connect Your n8n Instance

1. **In the dashboard, look for "n8n Connection" or "Add Instance"**
   - Click it

2. **Enter your n8n details**:
   - **n8n URL**: `http://localhost:5678` (or whatever you wrote down in Step 1)
   - **API Key**: Paste the key you copied in Step 2
   - Click **"Save"** or **"Connect"**

3. **Test the connection**
   - The dashboard should show "Connected" ✅
   - If it fails, double-check your URL and API key

### Step 3A-3: Get Your Hosted Server URL

1. **In the dashboard, find "MCP Server URL"**
   - It looks like: `https://your-username.n8n-mcp.com`
   - **Copy this URL** - you'll need it in the next step

### Step 3A-4: Configure Antigravity

Now we'll tell Antigravity how to connect to the hosted n8n-MCP.

1. **In Antigravity**:
   - Click the three dots **...** in the top-right corner
   - Click **"MCP Servers"**
   - Click **"Manage MCP Servers"**
   - Click **"View raw config"**

2. **This opens a file**: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

3. **Edit the file** (I'll help you with this next)

---

### 📝 Configuration File for Hosted Service

**SAVE THIS - I'll create it for you in the next step!**

Replace `<YOUR_USERNAME>` with your Windows username, and `YOUR_HOSTED_URL` with the URL from the dashboard.

```json
{
  "mcpServers": {
    "n8n-mcp-hosted": {
      "url": "YOUR_HOSTED_URL_FROM_DASHBOARD",
      "transport": "sse",
      "auth": {
        "type": "oauth"
      }
    }
  }
}
```

---

## 🏠 OPTION B: Self-Hosted Setup (15 minutes)

### Step 3B-1: Check if Node.js is Installed

1. **Open PowerShell** or Command Prompt:
   - Press **Windows key**
   - Type: `powershell`
   - Press Enter

2. **Check Node.js version**:
   ```powershell
   node --version
   ```

3. **What you should see**:
   - ✅ A version number like `v20.11.0` means Node.js is installed
   - ❌ `'node' is not recognized` means you need to install Node.js

4. **If you need to install Node.js**:
   - Go to: `https://nodejs.org`
   - Download the "LTS" version (recommended)
   - Run the installer
   - Restart PowerShell after installation

### Step 3B-2: Install n8n-MCP

1. **In PowerShell**, run this command:
   ```powershell
   npm install -g n8n-mcp
   ```

2. **Wait for installation** (1-2 minutes)
   - You'll see text scrolling
   - When it's done, you'll see your command prompt again

3. **Verify installation**:
   ```powershell
   npm list -g n8n-mcp
   ```
   - Should show the installed version

### Step 3B-3: Find the Installation Path

Run this command to find where n8n-mcp was installed:

```powershell
npm root -g
```

This will show something like:
```
C:\Users\<YOUR_USERNAME>\AppData\Roaming\npm\node_modules
```

The full path to n8n-mcp will be:
```
C:\Users\<YOUR_USERNAME>\AppData\Roaming\npm\node_modules\n8n-mcp\dist\mcp\index.js
```

**Write this down or copy it!**

### Step 3B-4: Configure Antigravity

1. **In Antigravity**:
   - Click three dots **...** → MCP Servers → Manage MCP Servers → View raw config

2. **Edit**: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

---

### 📝 Configuration File for Self-Hosted

**SAVE THIS - I'll create it for you!**

Replace:
- `<YOUR_USERNAME>` with your Windows username
- `YOUR_N8N_API_KEY` with the API key from Step 2

```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "node",
      "args": [
        "C:\\Users\\<YOUR_USERNAME>\\AppData\\Roaming\\npm\\node_modules\\n8n-mcp\\dist\\mcp\\index.js"
      ],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "http://localhost:5678",
        "N8N_BASE_URL": "http://localhost:5678",
        "N8N_API_KEY": "YOUR_N8N_API_KEY"
      }
    }
  }
}
```

---

## ✅ STEP 4: Test the Setup (2 minutes)

### Refresh MCP Servers

1. **In Antigravity**:
   - Click three dots **...**
   - Click **"MCP Servers"**
   - Click **"Manage MCP Servers"**
   - Click **"Refresh"**

2. **Check if n8n-mcp appears**:
   - You should see "n8n-mcp" or "n8n-mcp-hosted" in the list
   - It should show as "Connected" or "Enabled"

### Test Commands

In Antigravity chat, try these commands:

**Test 1: Check tools are available**
```
List available n8n-MCP tools
```

**What you should see:**
- A list of 20 tools
- Including: search_nodes, get_node, validate_workflow, n8n_create_workflow, etc.

**Test 2: Check n8n connection**
```
List my n8n workflows
```

**What you should see:**
- A list of your workflows from n8n
- Or "No workflows found" if you haven't created any yet

---

## 🎉 Success!

If both tests work, you're all set! You can now:

✅ Validate workflows automatically  
✅ Search 1,084+ n8n nodes  
✅ Access 2,700+ workflow templates  
✅ Create/update workflows via AI

---

## 🆘 Troubleshooting

### "Cannot find module" (Self-Hosted)
- The path in `args` is wrong
- Run `npm root -g` to find the correct path
- Make sure to use double backslashes `\\` in the path

### "Connection refused"
- n8n Docker container is not running
- Check Docker Desktop and start the container

### "Authentication failed"
- API key is incorrect
- Go back to n8n and create a new API key
- Make sure you copied it correctly (no extra spaces)

### "MCP server not showing up"
- Config file has syntax errors
- Make sure JSON is valid (all brackets and quotes match)
- Check commas (no comma after last item)

---

## 📞 Need Help?

Let me know which option you chose (A or B) and where you got stuck!

