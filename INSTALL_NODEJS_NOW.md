# INSTALL NODE.JS - Follow These Steps

**Latest Version Available**: Node.js 24.13.0 LTS (Long Term Support)

---

## 📥 STEP 1: Download Node.js (2 minutes)

### What to Do:

1. **Open your web browser** (Chrome, Edge, Firefox - any browser)

2. **Type this URL in the address bar**:
   ```
   https://nodejs.org
   ```
   Press Enter

3. **You'll see the Node.js homepage**
   - There are TWO big download buttons
   - One says "LTS" (Long Term Support) ← **CLICK THIS ONE**
   - One says "Current" ← Don't click this
   
4. **The download starts automatically**
   - File name will be something like: `node-v24.13.0-x64.msi`
   - File size: About 70 MB
   - Save location: Usually your Downloads folder
   - **Wait for download to finish** (may take 2-5 minutes depending on internet speed)

---

## 💾 STEP 2: Install Node.js (5 minutes)

### What to Do:

1. **Find the downloaded file**
   - Go to your Downloads folder
   - Look for: `node-v24.13.0-x64.msi` (or similar)

2. **Double-click the installer file**
   - Windows might ask "Do you want to allow this app to make changes?"
   - Click **"Yes"**

3. **Installation Wizard Opens - Follow these steps**:

   **Screen 1: Welcome**
   - Click **"Next"**

   **Screen 2: License Agreement**
   - Check the box: "I accept the terms in the License Agreement"
   - Click **"Next"**

   **Screen 3: Destination Folder**
   - Keep the default path (something like `C:\Program Files\nodejs\`)
   - Click **"Next"**

   **Screen 4: Custom Setup**
   - **VERY IMPORTANT**: Look for "Add to PATH"
   - Make sure it's checked ✅ (it usually is by default)
   - This lets your computer find Node.js from anywhere
   - Click **"Next"**

   **Screen 5: Tools for Native Modules**
   - You can leave this UNCHECKED (we don't need it)
   - Click **"Next"**

   **Screen 6: Ready to Install**
   - Click **"Install"**
   - **Wait** for the progress bar (2-3 minutes)
   - You'll see a green progress bar filling up

   **Screen 7: Completed**
   - Click **"Finish"**

4. **Installation is DONE!** ✅

---

## ✅ STEP 3: Verify Installation (1 minute)

### What to Do:

1. **IMPORTANT: Close any open PowerShell or Command Prompt windows**
   - This is necessary for the changes to take effect

2. **Open a NEW PowerShell window**:
   - Press the **Windows Key** on your keyboard
   - Type: `powershell`
   - Press **Enter**
   - A blue window opens (PowerShell)

3. **Come back here and tell me**: "Node.js is installed"

4. **I'll verify it's working** by running some test commands

---

## 🤔 What Just Happened?

**You installed two things**:
1. **Node.js** - The runtime that executes JavaScript code
2. **npm** - Node Package Manager (comes with Node.js automatically)

**Why "Add to PATH" matters**:
- Your computer has a list of folders where it looks for programs
- "PATH" is that list
- Adding Node.js to PATH means you can run `node` and `npm` commands from anywhere
- Without this, your computer wouldn't know where to find Node.js

---

## 🚨 Common Issues

### "Download is very slow"
- The file is 70MB, might take a while on slow internet
- Be patient!

### "Windows Defender blocked it"
- Click "More info" → "Run anyway"
- Node.js is safe and official software

### "Installer won't open"
- Try right-clicking the file → "Run as Administrator"

### "I closed PowerShell before telling you"
- No problem! Just tell me "Node.js is installed" and I'll verify it

---

## ⏭️ What Happens Next?

Once you tell me "Node.js is installed", I will:

1. ✅ Verify Node.js is working correctly
2. ✅ Install n8n-MCP automatically
3. ✅ Configure Antigravity to use n8n-MCP
4. ✅ Test the connection to your n8n instance
5. ✅ You'll be ready to use n8n-MCP!

---

**Ready? Start with Step 1** → Open https://nodejs.org and download the LTS version!

**When done, just say**: "Node.js is installed"
