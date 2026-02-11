# Setup Checklist for n8n-to-App Pipeline

Use this checklist to track your initial setup progress.

## ☐ Phase 1: MCP Configuration

### n8n MCP - Choose Your Path

**Option A: Hosted Service (Recommended)** ☁️
- [ ] Visited [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
- [ ] Created account and got server URL
- [ ] Added hosted config to `mcp_config.json`
- [ ] Connected n8n instance (added API key in dashboard)
- [ ] Tested with "List available n8n-MCP tools"

**Option B: Self-Hosted** 🏠
- [ ] Installed: `npm install -g n8n-mcp`
- [ ] Added config to `mcp_config.json`
- [ ] Set N8N_API_URL and N8N_API_KEY
- [ ] Refreshed MCP servers in Antigravity
- [ ] Tested with "List available n8n-MCP tools"

**See**: [`N8N_MCP_QUICKSTART.md`](N8N_MCP_QUICKSTART.md) for detailed setup

### GitHub MCP
- [ ] GitHub MCP installed
- [ ] GitHub account authenticated
- [ ] Permissions granted (repo creation, push)
- [ ] Connection tested (can list repos)

---

## ☐ Phase 2: Account Setup

### Vercel Account
- [ ] Visited [vercel.com](https://vercel.com)
- [ ] Signed up with "Continue with GitHub"
- [ ] Authorized Vercel to access GitHub
- [ ] Account setup completed

---

## ☐ Phase 3: Skills Verification

### n8n Skills (Already Installed!) ✅
- [x] Cloned n8n-skills repository
- [x] Extracted to `.agent/skills/n8n/`
- [x] 7 skills available:
  - n8n Expression Syntax
  - n8n MCP Tools Expert
  - n8n Workflow Patterns
  - n8n Validation Expert
  - n8n Node Configuration
  - n8n Code JavaScript
  - n8n Code Python
- [ ] Verified with "What n8n skills are available?"

### Other Skills
- [ ] `front-end-designer` skill located/installed

---

## ☐ Phase 4: Project Structure

- [ ] Created `workflows/` directory
- [ ] Created `apps/` directory
- [ ] Reviewed `instructions2.md`

---

## Ready to Start!

Once all items are checked, you're ready to begin with:

```
"Help me validate my [workflow-name] workflow for app integration"
```

---

## Quick Reference

**n8n MCP Test**: "List my n8n workflows"
**GitHub MCP Test**: "Show me my GitHub repositories"
**First Workflow**: Start with Phase 1 in `instructions2.md`
