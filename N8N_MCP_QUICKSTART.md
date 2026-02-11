# n8n MCP Quick Start Guide

**Goal**: Get started with n8n-MCP in under 5 minutes using the hosted service.

---

## 🚀 Fastest Path: Hosted Service (Recommended)

### Step 1: Create Account (2 minutes)

1. Go to **[dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)**
2. Click **"Sign Up"** or **"Start for Free"**
3. Create your account
4. You'll get your hosted MCP server URL

**Free Tier Includes**:
- ✅ 100 MCP calls per day
- ✅ All 1,084 n8n nodes
- ✅ 2,700+ workflow templates
- ✅ Automatic updates
- ✅ Zero configuration

---

### Step 2: Configure Antigravity (2 minutes)

1. **Open MCP Configuration**:
   - Click three dots `...` in top right of Antigravity
   - Click **"MCP Servers"**
   - Click **"Manage MCP Servers"**
   - Click **"View raw config"**

2. **Add n8n-MCP Configuration**:

Open: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

Add this configuration:

```json
{
  "mcpServers": {
    "n8n-mcp-hosted": {
      "url": "YOUR_HOSTED_SERVER_URL_FROM_DASHBOARD",
      "transport": "sse",
      "auth": {
        "type": "oauth"
      }
    }
  }
}
```

**Replace** `YOUR_HOSTED_SERVER_URL_FROM_DASHBOARD` with the URL from your dashboard.

3. **Save and Refresh**:
   - Save the file
   - Go back to "Manage MCP Servers"
   - Click **"Refresh"**
   - n8n-mcp should appear with all 20 tools

---

### Step 3: Connect to Your n8n Instance (1 minute)

**If you have an n8n instance** (cloud or self-hosted):

1. Get your n8n API key:
   - In n8n: Settings → API → Create API Key
   
2. Configure in the hosted dashboard:
   - Go to [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
   - Add your n8n instance URL
   - Add your API key
   - Save settings

**If you don't have n8n yet**:
- You can still use the MCP for node documentation and templates
- Sign up for n8n cloud: [n8n.io](https://n8n.io)

---

### Step 4: Verify Installation (30 seconds)

In Antigravity, try these commands:

```
"List available n8n-MCP tools"
```

Expected: Should show all 20 tools

```
"Search for Gmail nodes in n8n"
```

Expected: Should return Gmail node information

```
"Show me n8n workflow templates for email automation"
```

Expected: Should return template results

---

## ✅ You're Ready!

Now you can use n8n-MCP in your workflow-to-app pipeline:

```
"Validate my contact-form workflow using n8n-MCP"
```

Antigravity will:
1. Connect to your n8n instance
2. Retrieve the workflow
3. Validate configuration
4. Generate documentation

---

## 🔧 Alternative: Self-Hosted Setup

**If you prefer to run n8n-MCP on your own infrastructure:**

### Prerequisites
- Node.js installed
- Your n8n instance URL and API key

### Installation

1. **Install globally**:
```bash
npm install -g n8n-mcp
```

2. **Configure Antigravity**:

Open: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

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

3. **Replace**:
   - `<YOUR_USERNAME>` with your Windows username
   - `YOUR_N8N_API_KEY` with your actual API key
   - Update URLs if using cloud n8n

4. **Refresh MCP Servers** in Antigravity

---

## 📊 Comparison: Hosted vs Self-Hosted

| Feature | Hosted Service | Self-Hosted |
|---------|---------------|-------------|
| **Setup Time** | 2-5 minutes | 15-30 minutes |
| **Configuration** | OAuth (automatic) | Manual API keys |
| **Updates** | Automatic | Manual (npm update) |
| **Calls/Day** | 100 (free) / Unlimited (paid) | Unlimited |
| **Privacy** | Data goes through hosted service | Fully private |
| **Best For** | Quick start, development | Production, privacy needs |

---

## 🎯 Next Steps

1. ✅ **Installed n8n-MCP** (hosted or self-hosted)
2. ✅ **Verified connection** (test commands work)
3. ➡️ **Start validating workflows**: See [`instructions2.md`](../instructions2.md) Phase 1
4. ➡️ **Use n8n-skills**: See [`.agent/skills/n8n/`](../.agent/skills/n8n/) for expert guidance

---

## 🆘 Troubleshooting

### "MCP server not responding"
- **Hosted**: Check your internet connection, verify dashboard shows active
- **Self-hosted**: Verify npm install completed, check paths in config

### "Cannot connect to n8n instance"
- Verify n8n is running (visit URL in browser)
- Check API key is correct
- Ensure firewall allows connection

### "Tool calls failing"
- **Hosted**: Check you haven't exceeded 100 calls/day (free tier)
- **Self-hosted**: Check n8n API key has proper permissions

### "OAuth not working"
- Clear browser cache
- Re-authorize in dashboard
- Check MCP config has correct URL

---

## 📚 Resources

- **n8n-MCP Documentation**: [github.com/czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)
- **Dashboard**: [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
- **n8n-skills**: [`.agent/skills/n8n/`](../.agent/skills/n8n/)
- **Support**: GitHub Issues or community Discord

---

**Ready to validate your first workflow?** → See [`instructions2.md`](../instructions2.md)
