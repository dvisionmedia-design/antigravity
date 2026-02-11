# n8n Workflow to Web App Pipeline

Transform your n8n workflows into production-ready Next.js applications.

---

## 📋 Quick Start

1. **Setup** - Follow [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) to configure MCPs and accounts
2. **Validate** - Use [`instructions2.md`](instructions2.md) Phase 1 to validate your n8n workflow
3. **Build** - Create Next.js app following Phase 2
4. **Deploy** - Push to GitHub and deploy to Vercel (Phases 3-4)

---

## 📁 Project Structure

```
/
├── workflows/              # n8n workflow validation & exports
│   ├── VALIDATION_TEMPLATE.md
│   └── {workflow-name}/
│       ├── workflow.json
│       ├── validation.md
│       └── api-spec.md
│
├── apps/                   # Next.js applications
│   └── {app-name}/
│       ├── src/
│       ├── public/
│       └── package.json
│
├── instructions.md         # Modal deployment guide
├── instructions2.md        # Main workflow guide
├── SETUP_CHECKLIST.md      # Initial setup tracker
└── README.md               # This file
```

---

## 🚀 Workflow Overview

### Phase 1: Workflow Validation
Ensure your n8n workflow is ready for app integration with proper JSON input/output.

### Phase 2: Local Development
Build and test Next.js front-end locally with n8n integration.

### Phase 3: GitHub Repository
Version control your code and prepare for deployment.

### Phase 4: Vercel Deployment
Deploy to production with automatic GitHub sync.

---

## 🛠️ Tools & Technologies

**Backend & Automation**:
- **n8n** - Workflow automation platform
- **n8n-MCP** - AI integration with 20 tools (7 core + 13 management)
  - Hosted service at [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
  - 1,084+ nodes, 2,700+ templates
- **n8n-skills** - 7 expert skills for production workflows

**Frontend**:
- **Next.js** - React framework for web apps
- **React** - UI component library

**DevOps**:
- **GitHub** - Version control and code hosting
- **Vercel** - Deployment and hosting platform

**AI Assistant**:
- **Antigravity** - AI coding assistant with MCP integrations

---

## 📚 Documentation

- [`N8N_MCP_QUICKSTART.md`](N8N_MCP_QUICKSTART.md) - **START HERE** - 5-minute n8n-MCP setup
- [`instructions2.md`](instructions2.md) - Complete workflow-to-app pipeline guide
- [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) - Initial setup progress tracker
- [`workflows/VALIDATION_TEMPLATE.md`](workflows/VALIDATION_TEMPLATE.md) - Workflow validation template
- [`.agent/skills/n8n/`](.agent/skills/n8n/) - 7 installed n8n expert skills

---

## 💡 Example Usage

```
"Help me validate my contact-form workflow for app integration"
```

Antigravity will:
1. Inspect your n8n workflow
2. Create validation checklist
3. Document API specification
4. Guide you through building the front-end

---

## 🔄 Iteration Process

**Update Workflow**: Modify in n8n → Update docs → Test → Push to GitHub
**Update Front-End**: Edit locally → Test → Commit → Push → Auto-deploys to Vercel

---

## 📝 Notes

- Keep workflows focused (single responsibility)
- Always use JSON for data exchange
- Test locally before deploying
- Use environment variables for all endpoints
- Document as you go

---

**Ready to build?** Start with [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md)!
