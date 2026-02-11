# n8n Workflow to Web App Pipeline

**Goal**: Transform n8n workflows into production-ready Next.js web applications deployed on Vercel.

---

## Overview

This project automates the process of:
1. **Validating** n8n workflows for proper data intake/output
2. **Building** Next.js/React front-ends that integrate with n8n
3. **Deploying** to Vercel with automatic GitHub sync

---

## Prerequisites

### Setup Required
- **n8n MCP** - Will be configured to access your n8n instance
- **GitHub MCP** - Will be configured to push changes to repositories
- **Skills** - Referenced from `.agent/skills/`:
  - `n8n` skill (workflow optimization & validation)
  - `front-end-designer` skill (Next.js/React UI development)

### Accounts Needed
- **n8n instance** - Your existing n8n instance (cloud or self-hosted)
- **GitHub account** - We'll create repositories as needed
- **Vercel account** - Will be created and linked to GitHub during setup

---

## Project Structure

```
/
├── workflows/              # n8n workflow exports & validation
│   ├── {workflow-name}/
│   │   ├── workflow.json   # Exported n8n workflow
│   │   ├── validation.md   # Validation checklist
│   │   └── api-spec.md     # Input/output documentation
│
├── apps/                   # Next.js applications
│   ├── {app-name}/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── README.md
│
├── instructions.md         # Modal deployment guide
└── instructions2.md        # This file
```

---

## Initial Setup (One-Time)

### Step 1: Configure n8n MCP

**What it does**: Connects Antigravity to your n8n instance for workflow inspection and modification

**📚 Quick Start Guide**: See [`N8N_MCP_QUICKSTART.md`](N8N_MCP_QUICKSTART.md) for detailed setup instructions

#### Option A: Hosted Service ☁️ (Recommended - 5 minutes)

**Fastest path - zero local setup required!**

1. **Create Account**: Go to [dashboard.n8n-mcp.com](https://dashboard.n8n-mcp.com)
2. **Get Server URL**: Copy your hosted MCP server URL
3. **Configure Antigravity**:
   - Open MCP config: Three dots `...` → MCP Servers → View raw config
   - Add configuration (see quick-start guide)
4. **Connect n8n**: Add your n8n API key in the dashboard

**Free Tier**: 100 MCP calls/day (perfect for development)

#### Option B: Self-Hosted 🏠 (Full Control - 15 minutes)

1. **Install**: `npm install -g n8n-mcp`
2. **Configure**: Add to `mcp_config.json` (see quick-start guide)
3. **Set Environment Variables**: N8N_API_URL and N8N_API_KEY
4. **Refresh**: Restart Antigravity MCP servers

**Verification** (either option):
```
"List available n8n-MCP tools"
```
Should display 20 tools (7 core + 13 management tools)

---

### Step 2: Configure GitHub MCP

**What it does**: Allows Antigravity to create repositories and push code to GitHub

**Setup**:
1. Ensure GitHub MCP is installed and configured
2. Authenticate with your GitHub account
3. Grant necessary permissions (repo creation, push access)

**Verification**:
```
"Show me my GitHub repositories"
```
Antigravity should be able to list your existing repositories.

---

### Step 3: Create Vercel Account

**What it does**: Hosts your Next.js applications with automatic deployments

**Setup Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Choose "Continue with GitHub"** (important for auto-sync)
4. Authorize Vercel to access your GitHub account
5. Complete account setup

**After First Deployment**:
- Vercel will auto-detect Next.js projects
- Configure environment variables in Vercel dashboard
- Enable automatic deployments from GitHub

---

### Step 4: Install n8n Skills

**What it does**: Provides 7 expert skills for building production-ready n8n workflows

**Skills Location**: `.agent/skills/n8n/`

**Installation** (Already completed in this project!):
```bash
git clone https://github.com/czlonkowski/n8n-skills.git
# Skills extracted to .agent/skills/n8n/
```

**7 Skills Installed**:
1. ✅ **n8n Expression Syntax** - Correct expression patterns
2. ✅ **n8n MCP Tools Expert** - MCP tool usage (HIGHEST PRIORITY)
3. ✅ **n8n Workflow Patterns** - 5 proven architectural patterns
4. ✅ **n8n Validation Expert** - Error interpretation and fixing
5. ✅ **n8n Node Configuration** - Operation-aware setup
6. ✅ **n8n Code JavaScript** - Effective Code node patterns
7. ✅ **n8n Code Python** - Python limitations and workarounds

**Verification**:
```
"What n8n skills are available?"
```

**Other Skills Needed**:
- `front-end-designer` - For Next.js/React UI development (reference from actual location)

---

## Workflow: n8n to Production App

### Phase 1: Workflow Validation

**Objective**: Ensure n8n workflow is optimized for app integration

**Steps**:
1. Use n8n MCP to inspect the target workflow
2. Validate workflow configuration
3. Document API specification in `workflows/{workflow-name}/api-spec.md`
4. Export workflow to `workflows/{workflow-name}/workflow.json`

**Validation Checklist** (create `validation.md` for each workflow):

**Trigger Configuration**:
- [ ] Trigger type identified (Webhook, Manual, Schedule, Event-based, etc.)
- [ ] Webhook URL is accessible (if using webhook trigger)
- [ ] Trigger is properly configured and active

**Data Format Requirements**:
- [ ] **Input**: Accepts JSON format
- [ ] **Output**: Returns JSON format
- [ ] Input schema documented with field types
- [ ] Output schema documented with field types

**Response Structure** (Best Practices):
```json
{
  "success": true,
  "data": {
    // Your actual response data here
  },
  "message": "Operation completed successfully",
  "timestamp": "2026-02-09T00:00:00Z"
}
```

**Error Response Structure**:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  },
  "timestamp": "2026-02-09T00:00:00Z"
}
```

**Additional Validation**:
- [ ] Proper error handling nodes included
- [ ] Reasonable timeout settings (consider long operations)
- [ ] Authentication method specified (API key, OAuth, none)
- [ ] Rate limiting considered (if needed)
- [ ] Test data prepared for validation

---

### Phase 2: Local Development

**Objective**: Build and test Next.js front-end locally

**Steps**:
1. Create new Next.js app in `apps/{app-name}/`
2. Implement UI components using front-end-designer skill
3. Integrate with n8n webhook endpoint
4. Test locally with `npm run dev`
5. Iterate on design and functionality

**Key Requirements**:
- Use Next.js + React
- Modern, responsive design
- Proper error handling
- Loading states
- Success/failure feedback

---

### Phase 3: GitHub Repository

**Objective**: Version control and prepare for deployment

**Steps**:
1. Initialize git repository (if not already)
2. Create `.gitignore` (exclude `node_modules`, `.env.local`, etc.)
3. Create `.env.example` with required environment variables
4. Use GitHub MCP to:
   - Create repository (if new)
   - Push initial commit
   - Set up branch protection (optional)

**Environment Variables**:
```bash
# .env.local (DO NOT COMMIT)
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/...
NEXT_PUBLIC_APP_NAME=Your App Name
```

---

### Phase 4: Vercel Deployment

**Objective**: Deploy to production with auto-sync

**First-Time Setup** (per app):
1. Log in to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Configure environment variables:
   - `N8N_WEBHOOK_URL` - Your n8n webhook endpoint
   - Any other app-specific variables
6. Click "Deploy"

**Deployment Process**:
1. Vercel builds your Next.js app
2. Runs production build (`npm run build`)
3. Deploys to production URL
4. Provides deployment URL (e.g., `your-app.vercel.app`)

**Verify Deployment**:
1. Visit the Vercel deployment URL
2. Test the app functionality
3. Verify n8n integration works in production
4. Check Vercel logs for any errors

**Auto-Sync Setup** (Automatic after first deployment):
- ✅ Push to `main` branch → Auto-deploys to production
- ✅ Pull requests → Preview deployments
- ✅ Rollback capability from Vercel dashboard
- ✅ Build logs and runtime logs available

---

## Common Patterns

### n8n Webhook Integration (Next.js)

```typescript
// app/api/workflow/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  
  const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  const result = await response.json();
  return Response.json(result);
}
```

### Client-Side Form Submission

```typescript
// components/WorkflowForm.tsx
const handleSubmit = async (formData) => {
  setLoading(true);
  
  try {
    const response = await fetch('/api/workflow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    setResult(result);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```

---

## Iteration Workflow

### Making Changes

**To n8n Workflow**:
1. Update workflow in n8n interface
2. Use n8n MCP to verify changes
3. Update `api-spec.md` if input/output changed
4. Update front-end if API contract changed
5. Test integration
6. Push to GitHub → auto-deploys to Vercel

**To Front-End**:
1. Make changes locally
2. Test with `npm run dev`
3. Commit changes
4. Push to GitHub → auto-deploys to Vercel

---

## Quick Start Commands

```bash
# Create new Next.js app
npx create-next-app@latest apps/{app-name} --typescript --tailwind --app

# Local development
cd apps/{app-name}
npm run dev

# Build for production (optional, Vercel does this)
npm run build

# Push to GitHub (via GitHub MCP)
# Antigravity will handle this with GitHub MCP tools
```

---

## Best Practices

### n8n Workflows
- Keep workflows focused (single responsibility)
- Use consistent naming conventions
- Add error handling nodes
- Test with sample data before app integration
- Document expected input/output formats

### Next.js Apps
- Use environment variables for all endpoints
- Implement proper loading states
- Add error boundaries
- Use TypeScript for type safety
- Follow Next.js App Router conventions

### Deployment
- Never commit `.env.local` files
- Use Vercel environment variables for secrets
- Test in preview deployments before merging to main
- Keep `README.md` updated with setup instructions

---

## Troubleshooting

### n8n Webhook Not Responding
- Verify webhook is active in n8n
- Check n8n instance is accessible
- Verify webhook URL is correct
- Check n8n execution logs

### Vercel Deployment Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure `package.json` scripts are correct
- Check Node.js version compatibility

### CORS Issues
- Add CORS headers in n8n webhook response
- Or proxy through Next.js API route (recommended)

---

## Example: Complete Flow

1. **Validate Workflow**
   - "Check my 'Contact Form' workflow in n8n"
   - Antigravity uses n8n MCP to inspect
   - Creates validation checklist
   - Documents API spec

2. **Build App**
   - "Create a Next.js contact form that uses this workflow"
   - Antigravity uses front-end-designer skill
   - Creates beautiful, responsive form
   - Integrates with n8n webhook

3. **Deploy**
   - "Push this to GitHub and deploy to Vercel"
   - Antigravity uses GitHub MCP to create repo
   - Guides through Vercel connection
   - Verifies deployment

4. **Iterate**
   - "Add a file upload field"
   - Update n8n workflow to handle files
   - Update Next.js form
   - Push to GitHub → auto-deploys

---

## Notes

- **Keep it lean**: Only create files you need
- **Document as you go**: Update `api-spec.md` when workflows change
- **Test locally first**: Always verify before pushing to production
- **Use MCP tools**: Let Antigravity handle n8n and GitHub operations

---

**Ready to build?** Start with: "Help me validate my [workflow-name] workflow for app integration"
