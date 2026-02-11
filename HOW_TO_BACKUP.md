# How to Archive and Restore Your Antigravity Project

This guide explains how to save your entire project state—including our conversation history, artifacts, and installed configuration—so you can store it safely or move it to another machine.

---

## 📦 How to Archive (Backup)

I have created a script for you called `archive_project.ps1` in your main folder.

### Option 1: Double-Click (Easiest)
1. Open the folder `c:\kit---\antigravity\asdasd` in File Explorer.
2. Right-click `archive_project.ps1` and select **"Run with PowerShell"**.

### Option 2: Command Line
1. In your terminal, run:
   ```powershell
   .\archive_project.ps1
   ```

### What Happens?
- The script creates a `backups/` folder.
- It generates a timestamped ZIP file (e.g., `n8n-Nextjs-Pipeline_Backup_2026-02-11_16-45.zip`).
- **Contents of the Zip**:
  - `Project_Workspace/`: All your code, guides, and workflows.
  - `Agent_Brain/`: **Crucial.** Contains our entire conversation history, memory, artifacts, and context.

**✅ You can now copy this ZIP file to your SSD, Cloud (Dropbox/Drive), or USB.**

---

## 🔄 How to Restore

If you lose everything or move to a new computer, here is how to pick up exactly where we left off.

### 1. Restore the Workspace
1. Extract `Project_Workspace` from the zip to your desired folder (e.g., `C:\MyProjects\n8n-Pipeline`).
2. Open this folder in your IDE/Terminal.

### 2. Restore the Brain (The "Memory")
1. Extract `Agent_Brain` from the zip.
2. Locate your Antigravity Brain directory:
   - Default: `C:\Users\<YOUR_USER>\.gemini\antigravity\brain\`
3. Copy the folder inside `Agent_Brain` (named `16abd2cd...`) into that directory.

### 3. Resume
- Start Antigravity pointing to the workspace.
- I will immediately see the history and context from the restored brain files.

---

## ❓ FAQ

**Q: Can I read the conversation logs without restoring?**
A: **Yes!** Inside the zip, look at `Agent_Brain/.../.system_generated/logs/`. These are text files of our chats.

**Q: Does this save my n8n workflows?**
A: It saves the workflows we exported to the `workflows/` folder. It does **not** backup your running Docker container or n8n database. You should use n8n's built-in export feature for that, or backup your Docker volume.

**Q: Is the zip file encrypted?**
A: No. If your API keys are in `mcp_config.json`, keep the zip file secure.
