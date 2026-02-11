# Node.js Installation Required for Self-Hosted n8n-MCP

**Status**: Node.js is not installed on your system ❌

To use the self-hosted n8n-MCP, you need Node.js and npm installed first.

---

## 🚀 Quick Install: Node.js (10 minutes)

### Step 1: Download Node.js

1. **Open your browser**
2. **Go to**: `https://nodejs.org`
3. **Download the LTS version** (Long Term Support - recommended)
   - Look for the big green button that says "Download for Windows"
   - Version should be something like "20.x.x LTS"
4. **Save the installer** (file like: `node-v20.11.0-x64.msi`)

### Step 2: Install Node.js

1. **Run the installer** (double-click the downloaded file)
2. **Click "Next"** through the wizard:
   - Accept the license agreement
   - Use default installation location
   - ✅ **IMPORTANT**: Make sure "Add to PATH" is checked
3. **Click "Install"**
4. **Wait** (2-3 minutes)
5. **Click "Finish"**

### Step 3: Verify Installation

1. **Close any open PowerShell/Command Prompt windows**
2. **Open a NEW PowerShell**:
   - Press Windows key
   - Type: `powershell`
   - Press Enter

3. **Test Node.js**:
   ```powershell
   node --version
   ```
   Should show: `v20.x.x` or similar

4. **Test npm**:
   ```powershell
   npm --version
   ```
   Should show: `10.x.x` or similar

### Step 4: Continue n8n-MCP Setup

Once Node.js is installed, come back and tell me "Node.js is installed" and I'll continue with the n8n-MCP setup!

---

## ⚡ Alternative: Switch to Hosted Service

**Don't want to install Node.js?**

You can switch to the **Hosted Service** option instead:
- ✅ No installation needed
- ✅ 5-minute setup
- ✅ 100 calls/day free
- ✅ Can upgrade later if needed

**To switch**: Just say "Let's use hosted instead"

---

## 🆘 Troubleshooting

### "node is not recognized" after installation
- You didn't close and reopen PowerShell
- **Solution**: Close PowerShell completely and open a NEW one

### Download is slow
- The file is ~70MB, might take a few minutes
- Be patient!

### Installation fails
- Make sure you have admin rights
- Try right-clicking the installer → "Run as Administrator"

---

**What would you like to do?**

1. Install Node.js and continue with self-hosted
2. Switch to hosted service instead
3. Need help with installation
