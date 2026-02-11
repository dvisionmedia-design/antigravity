# n8n-MCP Configuration Examples

These are example configurations for connecting n8n-MCP to Antigravity.

---

## Hosted Service Configuration (Recommended)

**Location**: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

```json
{
  "mcpServers": {
    "n8n-mcp-hosted": {
      "url": "https://your-server-url.n8n-mcp.com",
      "transport": "sse",
      "auth": {
        "type": "oauth"
      }
    }
  }
}
```

**How to get your server URL**:
1. Go to [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
2. Sign up or log in
3. Copy your hosted server URL from the dashboard
4. Replace `https://your-server-url.n8n-mcp.com` above

**Connect to your n8n instance**:
1. In the dashboard, add your n8n instance URL
2. Add your n8n API key (from n8n Settings → API)
3. Save configuration

**Free Tier**: 100 MCP calls/day

---

## Self-Hosted Configuration

**Prerequisites**:
```bash
npm install -g n8n-mcp
```

**Location**: `C:\Users\<YOUR_USERNAME>\.gemini\antigravity\mcp_config.json`

**For Windows**:
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
        "N8N_API_KEY": "YOUR_N8N_API_KEY_HERE"
      }
    }
  }
}
```

**For macOS/Linux**:
```json
{
  "mcpServers": {
    "n8n-mcp": {
      "command": "node",
      "args": [
        "/usr/local/lib/node_modules/n8n-mcp/dist/mcp/index.js"
      ],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "http://localhost:5678",
        "N8N_BASE_URL": "http://localhost:5678",
        "N8N_API_KEY": "YOUR_N8N_API_KEY_HERE"
      }
    }
  }
}
```

**Replace**:
- `<YOUR_USERNAME>` - Your system username
- `YOUR_N8N_API_KEY_HERE` - Your n8n API key
- `http://localhost:5678` - Your n8n instance URL (if different)

**For n8n Cloud**:
```json
"N8N_API_URL": "https://your-instance.app.n8n.cloud",
"N8N_BASE_URL": "https://your-instance.app.n8n.cloud",
```

---

## Getting Your n8n API Key

1. Log in to your n8n instance
2. Go to **Settings** (gear icon)
3. Click **API**
4. Click **Create API Key**
5. Copy the key (save it securely!)
6. Use in your MCP configuration

**Security Note**: Never commit your API key to version control!

---

## Verifying Installation

After adding the configuration:

1. **Refresh MCP Servers**:
   - In Antigravity: Three dots `...` → MCP Servers
   - Click "Refresh"

2. **Test Connection**:
```
"List available n8n-MCP tools"
```

Expected output: Should list 20 tools
- 7 core tools (search_nodes, get_node, validate_workflow, etc.)
- 13 management tools (n8n_create_workflow, n8n_get_workflow, etc.)

3. **Test n8n Connection** (if configured):
```
"List my n8n workflows"
```

Expected output: Should list your workflows

---

## Troubleshooting

### "Cannot find module"
- **Self-hosted**: Verify the path in `args` is correct
- Run `npm root -g` to find your global npm modules path

### "Connection refused"
- Verify n8n is running (visit URL in browser)
- Check firewall settings
- Verify API URL is correct

### "Authentication failed"
- **Hosted**: Re-authenticate in dashboard
- **Self-hosted**: Check API key is correct
- Verify API key has proper permissions in n8n

### "Too many requests" (Hosted)
- You've exceeded 100 calls/day on free tier
- Upgrade to Supporter tier for unlimited calls
- Or switch to self-hosted

---

## Next Steps

Once configured, see:
- [`N8N_MCP_QUICKSTART.md`](N8N_MCP_QUICKSTART.md) - Quick start guide
- [`instructions2.md`](instructions2.md) - Full workflow pipeline
- [`.agent/skills/n8n/`](.agent/skills/n8n/) - Expert skills for n8n
